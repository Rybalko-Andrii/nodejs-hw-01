import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Помилка:', error.message);
  }
};
