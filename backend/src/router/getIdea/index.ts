import { z } from "zod"

import { ideas } from "../../lib/ideas";
import { trpc } from "../../lib/trpc"


export const getIdeaTRpcRoute = trpc.procedure.input(
    z.object({
        ideaId: z.number(),
    }),
).query(({ input }) => {
    const idea = ideas.find((idea) => idea.id_ === input.ideaId);
    return {idea: idea || null};
})
