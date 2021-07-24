import { ICreateCompanyDTO } from '../dtos/ICreateCompanyDTO';
import { IUpdateCompanyDTO } from '../dtos/IUpdateCompanyDTO';
import { Company } from '../infra/entities/Company';

interface ICompanyRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
  update(id: string, data: IUpdateCompanyDTO): Promise<void>;
  list(): Promise<Company[]>;
  delete(id: string): Promise<void>;
}

export { ICompanyRepository };
