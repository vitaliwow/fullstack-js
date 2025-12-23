import type {TrpcRouter} from '@fullstack-js/backend/src/router';
import {createTRPCReact} from '@trpc/react-query';

export const trpc = createTRPCReact<TrpcRouter>();
