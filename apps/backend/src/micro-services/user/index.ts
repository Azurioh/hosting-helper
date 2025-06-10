import { fastify, setupServer } from '@webhook-handler/fastify-core';
import EnvironmentService from '@webhook-handler/shared/services/environment-service';

fastify.get('/', async () => {
  return { hello: 'world (user)' };
});

const PORT = Number.parseInt(EnvironmentService.getInstance<EnvironmentService>().getEnvironment('PORT'), 10);

const start = async () => {
  setupServer(fastify);
  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
