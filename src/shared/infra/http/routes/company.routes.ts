import { Router } from 'express';

import { CreateCompanyController } from '@modules/companies/useCases/createCompany/CreateCompanyController';

const companyRouter = Router();

const createCompanyController = new CreateCompanyController();

companyRouter.post('/company', createCompanyController.handle);
export { companyRouter };
