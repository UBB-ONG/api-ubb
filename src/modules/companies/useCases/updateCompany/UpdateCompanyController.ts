import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCompanyUseCase } from './UpdateCompanyUseCase';

interface ICompanyRequest {
  avatar_url: string;
}

class UpdateCompanyController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { avatar_url }: ICompanyRequest = request.body;

    const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase);
    await updateCompanyUseCase.execute(id, {
      avatar_url,
    });

    return response.status(201).json({
      message: 'update success',
    });
  }
}

export { UpdateCompanyController };
