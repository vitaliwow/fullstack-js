import { useState } from "react";
import { Segment } from "../../components/Segment";
import { Input } from "../../components/Input";

export const NewIdeaPage = () => {
  const [state, setState] = useState({
    name: "",
    id_: "",
    description: "",
    text: "",
  });

  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submitting new idea", state);
        }}
      >
        <Input name="name" label="Name" state={state} setState={setState} />
        <Input
          name="id_"
          label="Identification"
          state={state}
          setState={setState}
        />
        <Input
          name="description"
          label="Description"
          state={state}
          setState={setState}
        />

        <div style={{ marginBottom: 10 }}>
          <label htmlFor="text">Text</label>
          <br />
          <textarea
            onChange={(e) => {
              setState({ ...state, text: e.target.value });
            }}
            value={state.text}
            name="text"
            id="text"
          />
        </div>
        <button type="submit">Create Idea</button>
      </form>
    </Segment>
  );
};
