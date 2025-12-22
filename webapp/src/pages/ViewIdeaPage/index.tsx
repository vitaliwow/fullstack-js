import { useParams } from "react-router-dom";

export const ViewIdeaPage = () => {
  const { ideaId } = useParams() as { ideaId: string };
  return (
    <div>
      <h1>Idea ID {ideaId}</h1>
      <p>This is the description of Idea {ideaId}.</p>
      <div>
        <p>Text paragraph 1 idea {ideaId} ...</p>
        <p>Text paragraph 2 idea {ideaId} ...</p>
        <p>Text paragraph 3 idea {ideaId} ...</p>
      </div>
    </div>
  );
};
