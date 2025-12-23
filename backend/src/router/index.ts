import { trpc } from '../lib/trpc'

// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TRpcRoute } from '${f.path.split('/').slice(0, -1).join('/')}'`)
import { createIdeaTRpcRoute } from './createIdea'
import { getIdeaTRpcRoute } from './getIdea'
import { getIdeasTRpcRoute } from './getIdeas'
// @endindex

export const trpcRouter = trpc.router({
  // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TRpcRoute,`)
  createIdea: createIdeaTRpcRoute,
  getIdea: getIdeaTRpcRoute,
  getIdeas: getIdeasTRpcRoute,
  // @endindex
})


export type TrpcRouter = typeof trpcRouter;
