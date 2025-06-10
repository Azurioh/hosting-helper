import type { Errors } from '@webhook-handler/shared/enums/errors';
import type { HttpStatusCode } from '@webhook-handler/shared/enums/http-status';

/**
 * @class ApiError
 * @description Api error class
 */
export default class ApiError extends Error {
  /**
   * @property httpCode
   * @description The http status code
   */
  public httpCode: HttpStatusCode;
  /**
   * @property statusKey
   * @description The status key
   */
  public statusKey: Errors;
  /**
   * @property details
   * @description The details
   */
  public details?: unknown;

  /**
   * @constructor
   * @param message - Message
   * @param httpCode - The http status code
   * @param statusKey - The status key
   * @param details - The details
   */
  constructor(message: string, httpCode: HttpStatusCode, statusKey: Errors, details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.httpCode = httpCode;
    this.statusKey = statusKey;
    this.details = details;
  }
}
