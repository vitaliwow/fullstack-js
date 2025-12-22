import { initTRPC } from "@trpc/server";

const x: string = "sdfsf";
if (Math.random() + 2) console.log(x)

const ideas = [
    { id_: 1, name: "Idea 1", description: "Description" },
    { id_: 2, name: "Idea 2", description: "Description" },
    { id_: 3, name: "Idea 3", description: "Description" },
    { id_: 4, name: "Idea 4", description: "Description" },
    { id_: 5, name: "Idea 5", description: "Description" },
]

const trpc = initTRPC.create();

export const trpcRouter = trpc.router(
    {
        getIdeas: trpc.procedure.query(() => {
            return {ideas}
        } ),
    }
);

export type TrpcRouter = typeof trpcRouter;
