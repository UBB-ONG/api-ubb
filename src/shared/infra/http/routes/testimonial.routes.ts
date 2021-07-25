import { Router } from 'express';

import { CreateTestimonialController } from '@modules/testimonials/useCases/createTestimonial/CreateTestimonialController';
import { DeleteTestimonialController } from '@modules/testimonials/useCases/deleteTestimonial/DeleteTestimonialController';
import { ListTestimonialController } from '@modules/testimonials/useCases/listTestimonials/ListTestimonialController';

const testimonialRouter = Router();

const createTestimonialController = new CreateTestimonialController();
const listTestimonialController = new ListTestimonialController();
const deleteTestimonialController = new DeleteTestimonialController();
testimonialRouter.post('/testimonial', createTestimonialController.handle);
testimonialRouter.get('/testimonial', listTestimonialController.handle);
testimonialRouter.delete(
  '/testimonial/:id',
  deleteTestimonialController.handle
);

export { testimonialRouter };
