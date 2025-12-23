import { trpc } from "../lib/trpc";
import { getIdeaTRpcRoute } from "../router/getIdea";
import { getIdeasTRpcRoute } from "../router/getIdeas";


export const trpcRouter = trpc.router(
    {
        getIdea: getIdeaTRpcRoute,
        getIdeas: getIdeasTRpcRoute,
    }
)
export type TrpcRouter = typeof trpcRouter;
