import { ICreateTestimonialDTO } from '../dtos/ICreateTestimonialDTO';
import { Testimonial } from '../infra/entities/Testimonial';

interface ITestimonialRepository {
  create(data: ICreateTestimonialDTO): Promise<Testimonial>;
  findById(id: string): Promise<Testimonial>;
  list(): Promise<Testimonial[]>;
  delete(id: string): Promise<void>;
}

export { ITestimonialRepository };
