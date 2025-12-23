import _ from "lodash";

import { ideas } from "../../lib/ideas";
import { trpc } from "../../lib/trpc"


export const getIdeasTRpcRoute = trpc.procedure.query(() => {
    return {ideas: ideas.map((idea) => _.pick(idea, ["id_", "name", "description"])) };
} )
