import Fastify, { type FastifyInstance } from 'fastify';
import { setupCors } from '@webhook-handler/fastify-config/cors';
import { setupRateLimit } from '@webhook-handler/fastify-config/rate-limit';
import { setupSwagger } from '@webhook-handler/fastify-config/swagger';
import { setupHelmet } from '@webhook-handler/fastify-config/helmet';
import { setupDecorators } from '@webhook-handler/fastify-decorators';

export const fastify = Fastify({ logger: true });

/**
 * @description Setup the server
 * @param ffy - The fastify instance
 * @returns void
 */
export const setupServer = (ffy: FastifyInstance): void => {
  // Setup decorators
  setupDecorators(ffy);

  // Setup plugins
  setupCors(ffy);
  setupHelmet(ffy);
  setupRateLimit(ffy);

  // Setup swagger
  setupSwagger(ffy);
};
