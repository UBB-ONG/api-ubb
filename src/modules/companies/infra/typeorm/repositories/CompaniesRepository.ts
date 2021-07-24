import { getRepository, Repository } from 'typeorm';

import { ICreateCompanyDTO } from '@modules/companies/dtos/ICreateCompanyDTO';
import { IUpdateCompanyDTO } from '@modules/companies/dtos/IUpdateCompanyDTO';
import { ICompanyRepository } from '@modules/companies/repositories/ICompanyRepository';

import { Company } from '../entities/Company';

class CompaniesRepository implements ICompanyRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = getRepository(Company);
  }

  async create({ avatar_url, name }: ICreateCompanyDTO): Promise<Company> {
    const newCompany = this.repository.create({ avatar_url, name });

    const result = await this.repository.save(newCompany);

    return result;
  }

  async update(
    id: string,
    { avatar_url, name }: IUpdateCompanyDTO
  ): Promise<void> {
    const company = await this.repository.findOne({ id });
    await this.repository.update(company, { avatar_url, name });
  }

  async list(): Promise<Company[]> {
    const all = await this.repository.find();
    return all;
  }

  async delete(id: string): Promise<void> {
    const company = await this.repository.findOne({ id });
    await this.repository.remove(company);
  }
}

export { CompaniesRepository };
