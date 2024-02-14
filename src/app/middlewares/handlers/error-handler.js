import { envMode } from '@/config';

export default function (err, req, res, next) {
  res
    .status(envMode === 'dev' ? err.status || 500 : 500)
    .send(
      envMode === 'dev'
        ? { message: err.message, stack: err.stack }
        : { message: 'Internal Server Error!.', error: {} }
    );
}
