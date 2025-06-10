import { Errors } from '@webhook-handler/shared/enums/errors';
import { HttpStatusCode } from '@webhook-handler/shared/enums/http-status';
import { type JwtPayload, sign, verify } from 'jsonwebtoken';
import ApiError from '@webhook-handler/shared/libs/api-error';
import Singleton from '@webhook-handler/shared/utils/singleton';

/**
 * @class JwtService
 * @description Jwt service class, used to sign and verify the jwt token
 */
export default class JwtService extends Singleton {
  /**
   * @constructor
   */
  private constructor() {
    super();
  }

  /**
   * @description Sign the jwt token
   * @param payload - The payload to sign
   * @returns The signed jwt token
   */
  signToken(payload: string | object): string {
    return sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.NODE_ENV === 'production' ? '1h' : '1d',
    });
  }

  /**
   * @description Verify the jwt token
   * @param token - The token to verify
   * @returns The payload of the jwt token
   */
  verifyToken(token: string): JwtPayload | string {
    try {
      return verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new ApiError('Invalid token', HttpStatusCode.unauthorized, Errors.unauthorized);
    }
  }
}
