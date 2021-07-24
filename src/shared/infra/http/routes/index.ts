import { Router } from 'express';

import { companyRouter } from './company.routes';
import { testimonialRouter } from './testimonial.routes';

const router = Router();

router.use(companyRouter, testimonialRouter);
export { router };
