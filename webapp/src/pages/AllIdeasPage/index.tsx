import { trpc } from "../../lib/trpc";
import { Link } from "react-router-dom";
import { getIdeaRoute } from "../../lib/routes";

export const AllIdeasPage = () => {
  const { data, error, isLoading, isError } = trpc.getIdeas.useQuery();
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h1>All Ideas</h1>
      {data?.ideas.map((idea) => (
        <div key={idea.id_}>
          <h2><Link to={getIdeaRoute(idea.id_)}>{idea.name}</Link></h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  );
};
