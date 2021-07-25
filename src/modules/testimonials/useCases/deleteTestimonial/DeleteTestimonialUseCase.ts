import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ITestimonialRepository } from '../../repositories/ITestimonialRepository';

@injectable()
class DeleteTestimonialUseCase {
  constructor(
    @inject('TestimonialRepository')
    private testimonialRepository: ITestimonialRepository
  ) {}
  async execute(id: string): Promise<void> {
    const testimonial = await this.testimonialRepository.findById(id);
    if (!testimonial)
      throw new AppError(`Testimonial with id ${id} not found`, 404);
    await this.testimonialRepository.delete(id);
  }
}

export { DeleteTestimonialUseCase };
