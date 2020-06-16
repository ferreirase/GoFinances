/* eslint-disable no-param-reassign */
import { Router } from 'express';
import multer from 'multer';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';
import uploadConfig from '../config/upload';

const transactionsRouter = Router();
const upload = multer(uploadConfig);

transactionsRouter.get('/', async (request, response) => {
  const transactionsRepository = new TransactionsRepository();
  const transactions = await transactionsRepository.getAll();

  const balance = await transactionsRepository.getBalance();

  return response.status(200).json({
    transactions,
    balance,
  });
});

transactionsRouter.post('/', async (request, response) => {
  const transactionsService = new CreateTransactionService();

  const newTransaction = await transactionsService.execute({
    title: request.body.title,
    value: request.body.value,
    type: request.body.type,
    category: request.body.category,
  });

  return response.status(201).json(newTransaction);
});

transactionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deleteTransactionService = new DeleteTransactionService();
  await deleteTransactionService.execute({ transactionId: id });

  return response.status(204).json();
});

transactionsRouter.delete('/', async (request, response) => {
  const transactionsRepository = new TransactionsRepository();
  await transactionsRepository.deleteAll();

  return response.status(200).json({ message: 'All transactions deleted' });
});

transactionsRouter.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    const importTransactionsService = new ImportTransactionsService();

    const newsTransactions = await importTransactionsService.execute({
      fileName: request.file.filename,
    });

    return response.status(200).json(newsTransactions);
  },
);

export default transactionsRouter;
