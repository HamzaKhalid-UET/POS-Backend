// ** router helper
import { Router } from 'express';

const router = Router();

// Successful Response handler
const successfulResponse = (message, data = null) => ({
  status: true,
  message,
  data,
});

// Invalid Response handler
const invalidResponse = (message, data = null) => ({
  status: false,
  message,
  data,
});

// Global Try Catch handler
const AsyncTryCatch = (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch((err) => next(err));
};

// round to two decimal places
function roundToTwoDecimalPlaces(number) {
  const factor = Math.pow(10, 2);
  return Math.round(number * factor) / factor;
}

export {
  router,
  successfulResponse,
  invalidResponse,
  AsyncTryCatch,
  roundToTwoDecimalPlaces,
};
