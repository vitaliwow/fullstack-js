import { initTRPC } from "@trpc/server";
import _ from "lodash";
import { z } from "zod";


const ideas = _.times(100).map((i) => ({
    id_: i,
    name: `Idea ${i}`,
    description: `This is the description for Idea ${i}.`,
    text: _.times(100).map((j) => `<p>This is paragraph ${j} of idea ${i}.</p>`).join(""),
}));

const trpc = initTRPC.create();

export const trpcRouter = trpc.router(
    {
        getIdeas: trpc.procedure.query(() => {
            return {ideas: ideas.map((idea) => _.pick(idea, ["id_", "name", "description"])) };
        } ),
        getIdea: trpc.procedure.input(
            z.object({
                ideaId: z.number(),
            }),
        ).query(({ input }) => {
            const idea = ideas.find((idea) => idea.id_ === input.ideaId);
            return {idea: idea || null};
        })
    });

export type TrpcRouter = typeof trpcRouter;
