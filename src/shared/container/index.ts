import { container } from 'tsyringe';

import { CompaniesRepository } from '@modules/companies/infra/typeorm/repositories/CompaniesRepository';
import { ICompanyRepository } from '@modules/companies/repositories/ICompanyRepository';
import { ITestimonialRepository } from '@modules/testimonials/repositories/ITestimonialRepository';
import { TestimonialsRepository } from '@modules/testimonials/infra/typeorm/repositories/TestimonialsRepository';

container.registerSingleton<ICompanyRepository>(
  'CompaniesRepository',
  CompaniesRepository
);

container.registerSingleton<ITestimonialRepository>(
  'TestimonialRepository',
  TestimonialsRepository
);
