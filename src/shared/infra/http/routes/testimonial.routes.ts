import { Router } from 'express';

import { CreateTestimonialController } from '@modules/testimonials/useCases/createTestimonial/CreateTestimonialController';

const testimonialRouter = Router();

const createTestimonialController = new CreateTestimonialController();

testimonialRouter.post('/testimonial', createTestimonialController.handle);

export { testimonialRouter };
