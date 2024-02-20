import { asFunction, AwilixContainer } from 'awilix';
import { FastifyInstance } from 'fastify';
import { HelloService } from './hello.service';
import helloRoutes from '../../api/hello.routes';

export class HelloModule {
  static async register(fastify: FastifyInstance, container: AwilixContainer) {
    container.register({
      helloService: asFunction(() => new HelloService()).scoped()
    });
    fastify.register(helloRoutes);
  }
}
