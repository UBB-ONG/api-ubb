import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCompanyUseCase } from './DeleteCompanyUseCase';

class DeleteCompanyController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCompanyUseCase = container.resolve(DeleteCompanyUseCase);
    await deleteCompanyUseCase.execute(id);

    return response.status(200).json({
      message: 'deleted success',
    });
  }
}

export { DeleteCompanyController };
