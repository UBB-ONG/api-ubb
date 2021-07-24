import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCompanyUseCase } from './CreateCompanyUseCase';

interface ICompanyRequest {
  avatar_url: string;
  name: string;
}

class CreateCompanyController {
  async handle(request: Request, response: Response) {
    const { avatar_url, name }: ICompanyRequest = request.body;

    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
    const newCompany = await createCompanyUseCase.execute({
      avatar_url,
      name,
    });

    return response.status(201).json(newCompany);
  }
}

export { CreateCompanyController };
