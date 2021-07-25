import { inject, injectable } from 'tsyringe';

import { ICompanyRepository } from '@modules/companies/repositories/ICompanyRepository';
import { AppError } from '@shared/errors/AppError';
import { Validator } from '@shared/utils/Validators';

interface ICompanyRequest {
  avatar_url?: string;
}
const validator = new Validator();
@injectable()
class UpdateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompanyRepository
  ) {}
  async execute(id: string, { avatar_url }: ICompanyRequest): Promise<void> {
    const companyExists = await this.companiesRepository.findById(id);
    if (!companyExists)
      throw new AppError(`Company with id ${id} not found`, 404);
    if (!avatar_url) throw new AppError('Photo incorrect!');
    await validator.validUrl(avatar_url);
    await this.companiesRepository.update(id, {
      avatar_url,
    });
  }
}

export { UpdateCompanyUseCase };
