import { inject, injectable } from 'tsyringe';

import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { ICompanyRepository } from '@modules/companies/repositories/ICompanyRepository';
import { AppError } from '@shared/errors/AppError';
import { Validator } from '@shared/utils/Validators';

interface ICompanyRequest {
  avatar_url: string;
  name: string;
}
const validator = new Validator();
@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompanyRepository
  ) {}
  async execute({ avatar_url, name }: ICompanyRequest): Promise<Company> {
    if (!avatar_url) throw new AppError('Photo incorrect!');
    if (!name) throw new AppError('Name incorrect!');
    await validator.validName(name);
    await validator.validUrl(avatar_url);
    const result = this.companiesRepository.create({
      avatar_url,
      name,
    });

    return result;
  }
}

export { CreateCompanyUseCase };
