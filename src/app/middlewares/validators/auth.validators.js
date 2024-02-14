import { check } from 'express-validator';
import { Users } from '@/app/models';

export default {
  login: [
    check('email', 'Email is required!')
      .trim()
      .notEmpty()
      .isEmail()
      .withMessage('Email is invalid!')
      .normalizeEmail()
      .custom(async (email, { req }) => {
        const isUser = await Users.findOne({ email });
        if (isUser) {
          throw new Error('Email or Password not found!');
        } else {
          req.user = isUser;
          return value;
        }
      })
      .escape(),
    check('password', 'Password is required!').notEmpty().escape(),
  ],
};
