import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTestimonialCompanyUseCase } from './CreateTestimonialUseCase';

interface ITestimonialRequest {
  name: string;
  avatar_url: string;
  city: string;
  office: string;
  relation: string;
  description: string;
}

class CreateTestimonialController {
  async handle(request: Request, response: Response) {
    const {
      name,
      avatar_url,
      city,
      office,
      relation,
      description,
    }: ITestimonialRequest = request.body;

    const createTestimonialCompanyUseCase = container.resolve(
      CreateTestimonialCompanyUseCase
    );
    const newCompany = await createTestimonialCompanyUseCase.execute({
      name,
      avatar_url,
      city,
      office,
      relation,
      description,
    });

    return response.status(201).json(newCompany);
  }
}

export { CreateTestimonialController };
