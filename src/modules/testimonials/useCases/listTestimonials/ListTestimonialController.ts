import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTestimonialCompanyUseCase } from './ListTestimonialUseCase';

class ListTestimonialController {
  async handle(request: Request, response: Response) {
    const listTestimonialCompanyUseCase = container.resolve(
      ListTestimonialCompanyUseCase
    );
    const testimonials = await listTestimonialCompanyUseCase.execute();

    return response.status(200).json(testimonials);
  }
}

export { ListTestimonialController };
