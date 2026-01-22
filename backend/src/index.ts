import Fastify from 'fastify';
import cors from '@fastify/cors';
import cookie from '@fastify/cookie';
import { config } from './config/env';
import { authRoutes } from './routes/auth.routes';
import { userRoutes } from './routes/user.routes';

const fastify = Fastify({
  logger: config.nodeEnv === 'development',
});

// Register plugins
fastify.register(cors, {
  origin: config.cors.origin,
  credentials: true,
});

fastify.register(cookie, {
  secret: config.jwt.secret, // for cookie signature
});

// Health check
fastify.get('/health', async () => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

// Register routes
fastify.register(authRoutes, { prefix: '/api/auth' });
fastify.register(userRoutes, { prefix: '/api/users' });

// Start server
const start = async () => {
  try {
    await fastify.listen({
      port: config.port as number,
      host: '0.0.0.0',
    });
    console.log(`
🚀 Server ready at: http://localhost:${config.port}
📊 Health check: http://localhost:${config.port}/health
🔐 Auth endpoints: http://localhost:${config.port}/api/auth/*
👤 User endpoints: http://localhost:${config.port}/api/users/*
    `);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
