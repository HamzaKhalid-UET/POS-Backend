import { connect } from 'mongoose';
import { envDatabaseURL } from '.';
import { mongoConfig } from '@/utils';

export default (async () => {
  try {
    await connect(envDatabaseURL, mongoConfig);
    console.info('Connection to db is established!');
  } catch (error) {
    console.log('error while connecting to db: ', error);
  }
})();
