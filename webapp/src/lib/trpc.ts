import type {TrpcRouter} from '@fullstack-js/backend/src/trpc';
import {createTRPCReact} from '@trpc/react-query';

export const trpc = createTRPCReact<TrpcRouter>();

