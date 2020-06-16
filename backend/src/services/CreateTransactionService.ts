import { getRepository, getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import Category from '../models/Category';
import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  category: string;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction | string> {
    const categoryRepository = getRepository(Category);
    const transactionRepository = getCustomRepository(TransactionRepository);

    const totalIncome = await transactionRepository.getBalance();

    if (type === 'outcome' && value > totalIncome.total) {
      throw new AppError('Insufficient funds');
    }

    const categoryExists = await categoryRepository.findOne({
      where: {
        title: category,
      },
    });

    if (categoryExists) {
      const newTransaction = transactionRepository.create({
        title,
        value,
        type,
        category_id: categoryExists.id,
      });

      await transactionRepository.save(newTransaction);

      return newTransaction;
    }

    const newCategory = categoryRepository.create({
      title: category,
    });

    await categoryRepository.save(newCategory);

    const newTransaction = transactionRepository.create({
      title,
      value,
      type,
      category_id: newCategory.id,
    });

    await transactionRepository.save(newTransaction);

    return newTransaction;
  }
}

export default CreateTransactionService;
