import { Router } from 'express';

import { CreateCompanyController } from '@modules/companies/useCases/createCompany/CreateCompanyController';
import { ListCompanyController } from '@modules/companies/useCases/listCompanies/ListCompaniesController';
import { UpdateCompanyController } from '@modules/companies/useCases/updateCompany/UpdateCompanyController';

const companyRouter = Router();

const createCompanyController = new CreateCompanyController();
const updateCompanyController = new UpdateCompanyController();
const listCompanyController = new ListCompanyController();
companyRouter.post('/company', createCompanyController.handle);
companyRouter.put('/company/:id', updateCompanyController.handle);
companyRouter.get('/company', listCompanyController.handle);
export { companyRouter };
