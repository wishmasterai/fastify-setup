import { fastify } from 'fastify';

const server = fastify({ logger: true });

server.listen({ port: 5000 }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
