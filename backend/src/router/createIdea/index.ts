import { ideas } from "../../lib/ideas";
import { trpc } from "../../lib/trpc"

import { zCreateIdeaTRpcInput } from "./input";


export const createIdeaTRpcRoute = trpc.procedure
    .input(
        zCreateIdeaTRpcInput
    ).mutation(({ input }) => {
            ideas.unshift(input);
            return true;
        }
    )
