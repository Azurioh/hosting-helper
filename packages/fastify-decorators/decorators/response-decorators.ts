import { Errors } from '@webhook-handler/shared/enums/errors';
import { HttpStatusCode } from '@webhook-handler/shared/enums/http-status';
import ApiError from '@webhook-handler/shared/libs/api-error';
import type { FastifyReply } from 'fastify';

/**
 * @description Send a success response with the specified HTTP code
 *
 * @param this - The FastifyReply instance
 * @param statusCode - The HTTP code of the response
 * @param data - The data to send in the response
 * @param meta - The optional metadata for the response
 */
export function success<T>(
  this: FastifyReply,
  statusCode: HttpStatusCode,
  data: T,
  meta?: Record<string, unknown>,
): void {
  this.code(statusCode).send({
    status: 'success',
    data,
    ...(meta && { meta }),
  });
}

/**
 * @description Throw an API error with the specified HTTP code
 *
 * @param this - The FastifyReply instance
 * @param message - The error message
 * @param httpCode - The HTTP code to return
 * @param statusCode - The specific application status code
 * @param details - Additional details about the error
 */
export function error(
  this: FastifyReply,
  message: string,
  httpCode: HttpStatusCode = HttpStatusCode.badRequest,
  statusCode: Errors = Errors.badRequest,
  details?: Record<string, unknown>,
): never {
  const errorInstance = new ApiError(message, httpCode, statusCode, details);
  this.code(httpCode);
  throw errorInstance;
}
