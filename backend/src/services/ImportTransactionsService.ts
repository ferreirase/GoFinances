/* eslint-disable no-return-await */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import csvParse from 'csv-parse';
import fs from 'fs';
import path from 'path';
import TransactionService from './CreateTransactionService';
import uploadConfig from '../config/upload';
// import Transaction from '../models/Transaction';

interface TransactionData {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

interface Request {
  fileName: string;
}

async function loadCSV(filePath: string): Promise<any[]> {
  const readCSVStream = fs.createReadStream(filePath);

  const parseStream = csvParse({
    from_line: 2, // começando a leitura pela segunda linha do arquivo
    ltrim: true, // removendo espaços vazios da esquerda
    rtrim: true, // removendo espaços vazios da direita
  });

  const parseCSV = readCSVStream.pipe(parseStream);

  const lines: any[] = [];

  parseCSV.on('data', line => {
    lines.push(line);
  });

  await new Promise(resolve => {
    parseCSV.on('end', resolve);
  });

  return lines;
}

class ImportTransactionsService {
  async execute({ fileName }: Request): Promise<any> {
    const csvFilePath = uploadConfig.directory;
    const transactionService = new TransactionService();

    await fs.promises.stat(path.join(csvFilePath, fileName));

    const arrayInObjects: TransactionData[] = [];
    const newsTransactions: Array<any> = [];

    await (await loadCSV(path.join(csvFilePath, fileName))).map(transaction =>
      arrayInObjects.push({
        title: transaction[0],
        type: transaction[1],
        value: Number(transaction[2]),
        category: transaction[3],
      }),
    );

    const arrayOrdered = arrayInObjects.sort((a, b) =>
      // eslint-disable-next-line no-nested-ternary
      a.type > b.type ? 1 : b.type > a.type ? -1 : 0,
    );

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < arrayOrdered.length; index++) {
      newsTransactions.push(
        // eslint-disable-next-line no-await-in-loop
        await transactionService.execute({
          title: arrayOrdered[index].title,
          value: Number(arrayOrdered[index].value),
          category: arrayOrdered[index].category,
          type: arrayOrdered[index].type,
        }),
      );
    }

    return newsTransactions;
  }
}

export default ImportTransactionsService;
