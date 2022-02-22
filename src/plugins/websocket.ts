import fp from 'fastify-plugin';
import websocketPlugin from 'fastify-websocket';

export default fp(async (fastify, opts) => {
  fastify.register(websocketPlugin);
});
