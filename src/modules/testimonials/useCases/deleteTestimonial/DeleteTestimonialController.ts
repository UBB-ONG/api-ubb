import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTestimonialUseCase } from './DeleteTestimonialUseCase';

class DeleteTestimonialController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const deleteTestimonialUseCase = container.resolve(
      DeleteTestimonialUseCase
    );
    await deleteTestimonialUseCase.execute(id);

    return response.status(200).json({
      message: 'delete success',
    });
  }
}

export { DeleteTestimonialController };
