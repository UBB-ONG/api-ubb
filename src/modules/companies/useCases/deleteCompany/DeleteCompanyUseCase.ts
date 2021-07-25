import { inject, injectable } from 'tsyringe';

import { ICompanyRepository } from '@modules/companies/repositories/ICompanyRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompanyRepository
  ) {}
  async execute(id: string): Promise<void> {
    const companyExists = await this.companiesRepository.findById(id);
    if (!companyExists)
      throw new AppError(`Company with id ${id} not found`, 404);
    await this.companiesRepository.delete(id);
  }
}

export { DeleteCompanyUseCase };
