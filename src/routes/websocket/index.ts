import { isReceiveAction } from './lib/actions/receive';
import { FastifyPluginAsync } from 'fastify';
import Session from './lib/Session';

const websocket: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get('/', { websocket: true }, (connection, req) => {
    connection.socket.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());
        if (!isReceiveAction(data)) return;
      } catch (e) {}
    });
  });
};

export default websocket;
