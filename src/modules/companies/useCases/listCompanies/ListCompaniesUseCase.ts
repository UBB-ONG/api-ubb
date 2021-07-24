import { inject, injectable } from 'tsyringe';

import { Company } from '@modules/companies/infra/typeorm/entities/Company';
import { ICompanyRepository } from '@modules/companies/repositories/ICompanyRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class ListCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompanyRepository
  ) {}
  async execute(): Promise<Company[]> {
    const companies = await this.companiesRepository.list();
    if (companies.length <= 0) throw new AppError('No company registered');
    return companies;
  }
}

export { ListCompanyUseCase };
