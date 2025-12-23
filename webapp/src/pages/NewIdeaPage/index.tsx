import { Segment } from "../../components/Segment";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { useFormik } from "formik";

export const NewIdeaPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      id_: "",
      description: "",
      text: "",
    },
    onSubmit: (values) => {
      console.info("Submitted", values);
    },
  });

  console.log(formik);

  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input name="name" label="Name" formik={formik} />
        <Input name="id_" label="Identification" formik={formik} />
        <Input name="description" label="Description" formik={formik} />
        <Textarea name="text" label="Text" formik={formik} />
        <button type="submit">Create Idea</button>
      </form>
    </Segment>
  );
};
