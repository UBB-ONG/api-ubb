import { isEmail, isURL, maxLength, minLength } from 'class-validator';

import { AppError } from '@shared/errors/AppError';

class Validator {
  public readonly data: string;

  async validName(data: string): Promise<void> {
    const minName = await minLength(data, 6);
    if (!minName) throw new AppError('Name incorrect minimum 6 characters!');
    const maxName = maxLength(data, 20);
    if (!maxName) throw new AppError('Name incorrect max 20 characters!');
  }
  async validUrl(data: string): Promise<void> {
    const urlValid = await isURL(data);
    if (!urlValid) throw new AppError('invalid URL');
  }
  async validEmail(data: string): Promise<void> {
    const urlValid = await isEmail(data);
    if (!urlValid) throw new AppError('invalid Email');
  }
}

export { Validator };
