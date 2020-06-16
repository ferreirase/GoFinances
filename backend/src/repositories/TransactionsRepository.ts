/* eslint-disable no-return-assign */
import { EntityRepository, Repository, getRepository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getAll(): Promise<Array<Transaction>> {
    const transactionsRepository = getRepository(Transaction);
    const transactions = await transactionsRepository.find({
      relations: ['category'],
    });

    return transactions;
  }

  public async getBalance(): Promise<Balance> {
    const transactionsRepository = getRepository(Transaction);
    const transactions = await transactionsRepository.find();

    const totalTransactionsIncome =
      transactions.filter(trans => trans.type === 'income').length === 0
        ? 0
        : transactions
            .filter(trans => trans.type === 'income')
            .map(tr => tr.value)
            .reduce(
              // eslint-disable-next-line no-param-reassign
              (accumulator, currentValue) => (accumulator += currentValue),
            );

    const totalTransactionsOutcome =
      transactions.filter(trans => trans.type === 'outcome').length === 0
        ? 0
        : transactions
            .filter(trans => trans.type === 'outcome')
            .map(tr => tr.value)
            .reduce(
              // eslint-disable-next-line no-param-reassign
              (accumulator, currentValue) => (accumulator += currentValue),
            );

    const balance = {
      income: totalTransactionsIncome,
      outcome: totalTransactionsOutcome,
      total: totalTransactionsIncome - totalTransactionsOutcome,
    };

    return balance;
  }

  public async deleteAll(): Promise<void> {
    const transactionsRepository = getRepository(Transaction);
    const transactions = await this.getAll();
    await transactionsRepository.remove(transactions);
  }
}

export default TransactionsRepository;
