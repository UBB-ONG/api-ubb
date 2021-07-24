import { Router } from 'express';

import { CreateCompanyController } from '@modules/companies/useCases/createCompany/CreateCompanyController';
import { UpdateCompanyController } from '@modules/companies/useCases/updateCompany/UpdateCompanyController';

const companyRouter = Router();

const createCompanyController = new CreateCompanyController();
const updateCompanyController = new UpdateCompanyController();
companyRouter.post('/company', createCompanyController.handle);
companyRouter.put('/company/:id', updateCompanyController.handle);
export { companyRouter };
