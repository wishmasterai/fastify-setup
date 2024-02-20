import { fastify } from 'fastify';
import { createContainer } from 'awilix';
import { fastifyAwilixPlugin } from '@fastify/awilix';
import { Config } from './core/config';
import { HelloModule } from './services/hello/hello.module';

async function start() {
  const server = fastify({ logger: true });
  const container = createContainer();

  await server.register(fastifyAwilixPlugin, { container });

  await HelloModule.register(server, container);

  try {
    await server.listen({ port: Config.PORT });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

start();
