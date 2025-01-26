import { addCustomer, deleteCustomer, getCustomer, getCustomerById, updateCustomer } from '@/app/controllers/customer-controller';
import { addCustomerService } from '@/app/services/customer-service';
import { AsyncTryCatch, router as customerRouter } from '@/utils';
import { get } from 'mongoose';
const { CustomerController } = require('../app/controllers');
const { customerValidators } = require('../app/middlewares/validators');
const { validateRequest } = require('../app/middlewares/handlers');


customerRouter.post('/addcustomer', AsyncTryCatch(addCustomer));
customerRouter.get('/getcustomer', AsyncTryCatch(getCustomer));
customerRouter.post('/updatecustomer/:id', AsyncTryCatch(updateCustomer));
customerRouter.get('/getcustomerbyid/:id', AsyncTryCatch(getCustomerById));
customerRouter.delete('/deletecustomer/:id', AsyncTryCatch(deleteCustomer));

export default customerRouter;    