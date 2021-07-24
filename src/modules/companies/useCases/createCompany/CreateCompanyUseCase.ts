import { minLength } from 'class-validator';
import { inject, injectable } from 'tsyringe';

import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { ICompanyRepository } from '@modules/companies/repositories/ICompanyRepository';
import { AppError } from '@shared/errors/AppError';

interface ICompanyRequest {
  avatar_url: string;
  name: string;
}

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompanyRepository
  ) {}
  async execute({ avatar_url, name }: ICompanyRequest): Promise<Company> {
    if (!avatar_url) throw new AppError('Photo incorrect!');
    if (!name) throw new AppError('Name incorrect!');
    const teste = minLength(name, 3);
    console.log(teste);
    const result = this.companiesRepository.create({
      avatar_url,
      name,
    });

    return result;
  }
}

export { CreateCompanyUseCase };
