
import { CreateCompanyDTO } from "@modules/companies/dtos/ICreateCompanyDTO";
import { UpdateCompanyDTO } from "@modules/companies/dtos/IUpdateCompanyDTO";
import { ICompanyRepository } from "@modules/companies/repositories/ICompanyRepository";
import { getRepository, Repository } from "typeorm";
import { Company } from "../entities/Company";

class CompaniesRepository implements ICompanyRepository {
	private repository: Repository<Company>;

	constructor() {
		this.repository = getRepository(Company);
	}

	async create({ avatar_url, name }: CreateCompanyDTO): Promise<Company> {
		const newCompany = this.repository.create({ avatar_url, name });

		return await this.repository.save(newCompany);
	}

	async update(
		id: string,
		{ avatar_url, name }: UpdateCompanyDTO
	): Promise<void> {
		const company = await this.repository.findOne({ id });
		await this.repository.update(company, { avatar_url, name });
  }
  

	async list(): Promise<Company[]> {
		return await this.repository.find();
  }
  

	async delete(id: number): Promise<void> {
		const company = await this.repository.findOne({ id });
		await this.repository.remove(company);
	}
}

export { CompaniesRepository };
