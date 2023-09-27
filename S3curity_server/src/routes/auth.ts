import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function authRoutes(fastify: FastifyInstance) {

    fastify.get('/me', {
        onRequest: [authenticate],
    }, async (req, res) => {

        return { user: req.user }
    })

    fastify.post('/users', async (req, res) => {

    })
}