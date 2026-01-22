import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/auth';

const prisma = new PrismaClient();

const updateProfileSchema = z.object({
  name: z.string().min(1).optional(),
  heightCm: z.number().int().positive().optional(),
  dateOfBirth: z.string().datetime().optional(),
});

export async function userRoutes(fastify: FastifyInstance) {
  // Get current user profile
  fastify.get(
    '/me',
    { preHandler: [authenticateToken] },
    async (request, reply) => {
      try {
        const userId = request.user!.userId;

        const user = await prisma.user.findUnique({
          where: { id: userId },
          select: {
            id: true,
            email: true,
            name: true,
            heightCm: true,
            dateOfBirth: true,
            role: true,
            createdAt: true,
          },
        });

        if (!user) {
          return reply.status(404).send({
            error: 'Not Found',
            message: 'User not found',
          });
        }

        return reply.send({ user });
      } catch (error) {
        console.error('Get user error:', error);
        return reply.status(500).send({
          error: 'Internal Server Error',
          message: 'An error occurred while fetching user data',
        });
      }
    }
  );

  // Update current user profile
  fastify.patch(
    '/me',
    { preHandler: [authenticateToken] },
    async (request, reply) => {
      try {
        const userId = request.user!.userId;
        const body = updateProfileSchema.parse(request.body);

        const updatedUser = await prisma.user.update({
          where: { id: userId },
          data: body,
          select: {
            id: true,
            email: true,
            name: true,
            heightCm: true,
            dateOfBirth: true,
            role: true,
            updatedAt: true,
          },
        });

        return reply.send({ user: updatedUser });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return reply.status(400).send({
            error: 'Validation Error',
            message: error.errors,
          });
        }
        console.error('Update user error:', error);
        return reply.status(500).send({
          error: 'Internal Server Error',
          message: 'An error occurred while updating user data',
        });
      }
    }
  );
}
