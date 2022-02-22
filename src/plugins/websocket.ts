import fp from 'fastify-plugin';
import websocketPlugin, { WebsocketPluginOptions } from 'fastify-websocket';

export default fp<WebsocketPluginOptions>(async (fastify, opts) => {
  fastify.register(websocketPlugin, {});
  return '';
});
