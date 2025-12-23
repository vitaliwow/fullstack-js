import { type Express } from "express"

import { initTRPC } from "@trpc/server";
import * as trpcExpress from '@trpc/server/adapters/express';

import { type TrpcRouter } from "../router";



export const trpc = initTRPC.create();
export const applyTRpcExpressApp = (
    expressApp: Express,
    trpcRouter: TrpcRouter
) => {
    expressApp.use(
        '/trpc', 
        trpcExpress.createExpressMiddleware({
            router: trpcRouter,
        })
    );
}

