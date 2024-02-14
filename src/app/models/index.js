import { Schema, model, models } from 'mongoose';

// ** models
import getUsersModel from './Users';

const args = {
  Schema,
  model,
  models,
};

const Users = getUsersModel(args);

export { Users };
