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
export const getViewIdeaRoutePattern = () => "/ideas/:ideaId";
export const getViewIdeaRoute = ({ ideaId }: { ideaId: string | number }) => `/ideas/${ideaId}`;

export const getNewIdeaRoute = () => "/ideas/new";
