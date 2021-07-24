import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCompanyUseCase } from './ListCompaniesUseCase';

class ListCompanyController {
  async handle(request: Request, response: Response) {
    const listompanyUseCase = container.resolve(ListCompanyUseCase);
    const companies = await listompanyUseCase.execute();

    return response.status(201).json(companies);
  }
}

export { ListCompanyController };
