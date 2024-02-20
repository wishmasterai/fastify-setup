import { FastifyInstance } from 'fastify';

export default function (fastify: FastifyInstance, opts: any, done: any) {
  fastify.route({
    method: 'GET',
    url: '/hello',
    handler: async (request, reply) => {
      const result = { data: 'Hello World!' };
      return reply.send(result);
    }
  });

  done();
}
