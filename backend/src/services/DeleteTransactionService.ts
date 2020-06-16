import { getCustomRepository } from 'typeorm';
import { isUuid } from 'uuidv4';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  transactionId: string;
}

class DeleteTransactionService {
  public async execute({ transactionId }: Request): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    if (!isUuid(transactionId)) {
      throw new AppError('ID invalid', 400);
    }

    const transaction = await transactionsRepository.findOne(transactionId);

    if (!transaction) {
      throw new AppError('Transaction not found', 404);
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
