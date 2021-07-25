import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Testimonial } from '../../infra/typeorm/entities/Testimonial';
import { ITestimonialRepository } from '../../repositories/ITestimonialRepository';

@injectable()
class ListTestimonialCompanyUseCase {
  constructor(
    @inject('TestimonialRepository')
    private testimonialRepository: ITestimonialRepository
  ) {}
  async execute(): Promise<Testimonial[]> {
    const testimonials = await this.testimonialRepository.list();
    if (testimonials.length === 0)
      throw new AppError('No testimonials registered', 404);
    return testimonials;
  }
}

export { ListTestimonialCompanyUseCase };
