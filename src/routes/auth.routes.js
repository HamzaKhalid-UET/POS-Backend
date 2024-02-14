import { AsyncTryCatch, router as AuthRouter } from '@/utils';
import { AuthController } from '@/app/controllers';
import { validateRequest } from '@/app/middlewares/handlers';
import { authValidators } from '@/app/middlewares/validators';

const { login, register } = new AuthController();
const { login: loginValidation } = authValidators;

const resolveBaseUrl = (arg) => '/users/' + arg;

AuthRouter.post(resolveBaseUrl('register'), AsyncTryCatch(register));

AuthRouter.post(
  resolveBaseUrl('login'),
  loginValidation, // schema
  validateRequest, // common middleware for validating schema
  AsyncTryCatch(login)
);

export default AuthRouter;
