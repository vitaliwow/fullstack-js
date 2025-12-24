import { ideas } from "../../lib/ideas";
import { trpc } from "../../lib/trpc"

import { zCreateIdeaTRpcInput } from "./input";


export const createIdeaTRpcRoute = trpc.procedure
    .input(
        zCreateIdeaTRpcInput
    ).mutation(({ input }) => {
            if (ideas.find(idea => idea.id_ === input.id_)) {
                throw Error("Idea with the ID already exists")
            }
            ideas.unshift(input);
            return true;
        }
    )
