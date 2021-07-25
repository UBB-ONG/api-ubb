import { getRepository, Repository } from 'typeorm';

import { ICreateTestimonialDTO } from '@modules/testimonials/dtos/ICreateTestimonialDTO';
import { ITestimonialRepository } from '@modules/testimonials/repositories/ITestimonialRepository';

import { Testimonial } from '../entities/Testimonial';

class TestimonialsRepository implements ITestimonialRepository {
  private repository: Repository<Testimonial>;

  constructor() {
    this.repository = getRepository(Testimonial);
  }

  async create({
    name,
    avatar_url,
    city,
    office,
    relation,
    description,
  }: ICreateTestimonialDTO): Promise<Testimonial> {
    const newTestimonial = this.repository.create({
      name,
      avatar_url,
      city,
      office,
      relation,
      description,
    });

    const result = await this.repository.save(newTestimonial);

    return result;
  }

  async findById(id: string): Promise<Testimonial> {
    const testimonial = await this.repository.findOne({ id });
    return testimonial;
  }

  async list(): Promise<Testimonial[]> {
    const all = await this.repository.find();
    return all;
  }

  async delete(id: string): Promise<void> {
    const testimonial = await this.repository.findOne({ id });
    await this.repository.remove(testimonial);
  }
}

export { TestimonialsRepository };
