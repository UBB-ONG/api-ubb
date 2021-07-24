import { Company } from "../infra/entities/Company";
import { CreateCompanyDTO } from '../dtos/ICreateCompanyDTO'
import { UpdateCompanyDTO } from "../dtos/IUpdateCompanyDTO";

interface ICompanyRepository {
  create(data: CreateCompanyDTO): Promise<Company>;
  update(id:string,data: UpdateCompanyDTO): Promise<void>;
  list(): Promise<Company[]>;
  delete(id: number): Promise<void>;
}

export { ICompanyRepository };