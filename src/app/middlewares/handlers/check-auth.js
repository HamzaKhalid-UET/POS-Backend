import { verify } from 'jsonwebtoken';
import { envToken } from '@/config';
import { invalidResponse } from '@/utils';
import { Users } from '@/app/models';

export default async function checkAuth(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(404)
      .send(invalidResponse('Authorizations was not provided', null));
  }
  const token = authorization.split(' ')[1];

  if (!token) {
    return res
      .status(404)
      .send(invalidResponse('Token was not provided', null));
  }
  try {
    const { id, email, fullName } = verify(token, envToken);
    req.user = {
      id,
      email,
      fullName,
    };

    const user = await Users.findOne({ where: { id: payload.id } });
    if (!user)
      return res
        .status(401)
        .json(invalidResponse('Invalid user! Login again!', null));

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json(invalidResponse('Not Authorized!', null));
  }
}
