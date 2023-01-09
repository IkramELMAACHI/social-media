import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const organizationRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ organizationName: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello from ${input.organizationName}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.organization.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
