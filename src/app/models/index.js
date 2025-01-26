import { Schema, model, models } from 'mongoose';

// ** models
import getUsersModel from './Users';
import getCustomerModel from './customer';

const args = {
  Schema,
  model,
  models,
};

const Users = getUsersModel(args);
const Customer = getCustomerModel(args);

export { Users , Customer };
