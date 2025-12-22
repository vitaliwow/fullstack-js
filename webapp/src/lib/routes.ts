const getRouteParams =  <T extends Record<string | number, boolean>>(object: T) => {
    return Object.keys(object).reduce((acc, key) => ({
            ...acc,
            [key]: `:${key}`,
        }), {}
    ) as Record<keyof T, string | number>;
}

export const getAllIdeasRoute = () => "/";

export const viewIdeaRouteParams = getRouteParams({ ideaId: true });
export type ViewIdeaRouteParams = typeof viewIdeaRouteParams;
export const getViewIdeaRoute = ({ ideaId }: { ideaId: ViewIdeaRouteParams }) => `/ideas/${ideaId}`;

/* export const viewIdeaRouteParams = {ideaId: ":ideaId"};
export type ViewIdeaRouteParams = { ideaId: string | number };
export const getViewIdeaRoute = ({ ideaId }: { ideaId: ViewIdeaRouteParams }) => `/ideas/${ideaId}`; */