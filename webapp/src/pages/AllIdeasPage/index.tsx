import { trpc } from "../../lib/trpc";
import { Link } from "react-router-dom";
import css from "./index.module.scss";
import { Segment } from "../../components/Segment";

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getIdeas.useQuery();
  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Segment title="All Ideas">
      <div className={css.ideas}>
        {data?.ideas.map((idea) => (
          <div key={idea.id_} className={css.idea}>
            <Segment
              size={2}
              title={
                <Link className={css.ideaLink} to={`ideas/${idea.id_}`}>
                  {idea.name}
                </Link>
              }
              description={idea.description}
            >
              {null}
            </Segment>
          </div>
        ))}
      </div>
    </Segment>
  );
};
