import { container } from 'tsyringe';

import { CompaniesRepository } from '@modules/companies/infra/typeorm/repositories/CompaniesRepository';
import { ICompanyRepository } from '@modules/companies/repositories/ICompanyRepository';

container.registerSingleton<ICompanyRepository>(
  'CompaniesRepository',
  CompaniesRepository
);
