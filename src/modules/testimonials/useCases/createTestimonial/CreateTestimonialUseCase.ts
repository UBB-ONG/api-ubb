import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Validator } from '@shared/utils/Validators';

import { Testimonial } from '../../infra/typeorm/entities/Testimonial';
import { ITestimonialRepository } from '../../repositories/ITestimonialRepository';

interface ITestimonialRequest {
  name: string;
  avatar_url: string;
  city: string;
  office: string;
  relation: string;
  description: string;
}
const validator = new Validator();
@injectable()
class CreateTestimonialCompanyUseCase {
  constructor(
    @inject('TestimonialRepository')
    private testimonialRepository: ITestimonialRepository
  ) {}
  async execute({
    name,
    avatar_url,
    city,
    office,
    relation,
    description,
  }: ITestimonialRequest): Promise<Testimonial> {
    if (!avatar_url) throw new AppError('Photo incorrect!');
    if (!name) throw new AppError('Name incorrect!');
    await validator.validName(name);
    await validator.validUrl(avatar_url);
    const result = this.testimonialRepository.create({
      name,
      avatar_url,
      city,
      office,
      relation,
      description,
    });

    return result;
  }
}

export { CreateTestimonialCompanyUseCase };
