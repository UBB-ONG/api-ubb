import { container } from 'tsyringe';

import { CompaniesRepository } from '@modules/companies/infra/typeorm/repositories/CompaniesRepository';
import { ICompanyRepository } from '@modules/companies/repositories/ICompanyRepository';
import { TestimonialsRepository } from '@modules/testimonials/infra/typeorm/repositories/TestimonialsRepository';
import { ITestimonialRepository } from '@modules/testimonials/repositories/ITestimonialRepository';

container.registerSingleton<ICompanyRepository>(
  'CompaniesRepository',
  CompaniesRepository
);

container.registerSingleton<ITestimonialRepository>(
  'TestimonialRepository',
  TestimonialsRepository
);
