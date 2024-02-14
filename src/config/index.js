import dotenv from 'dotenv';

dotenv.config();

export const envPort = process.env.PORT_NO;
export const envDatabaseURL = process.env.DB_URL
export const envMode = process.env.MODE;
export const envToken = process.env.JWT_TOKEN;
export const envTokenDuration = process.env.TOKEN_EXPIRE_IN;
export const envSaltRounds = process.env.HASH_SALT_ROUNDS;
