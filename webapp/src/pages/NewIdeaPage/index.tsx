import { Segment } from "../../components/Segment";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { useFormik } from "formik";
import { withZodSchema } from "formik-validator-zod";
import { z } from "zod";
import { trpc } from "../../lib/trpc";

export const NewIdeaPage = () => {
  const createIdea = trpc.createIdea.useMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      id_: "",
      description: "",
      text: "",
    },
    validate: withZodSchema(
      z.object({
        name: z.string().min(1),
        id_: z
          .string()
          .regex(
            /^[a-z0-9-]+$/,
            "ID could contain only lowercase letters, numbers and dashes",
          )
          .min(1),
        description: z.string().min(1),
        text: z
          .string()
          .min(100, "Text should be at least 100 characters long"),
      }),
    ),
    onSubmit: async (values) => {
      await createIdea.mutateAsync(values);
    },
  });

  console.log(formik.submitCount);

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
        {!formik.isValid && !!formik.submitCount && (
          <div style={{ color: "red" }}>Some fields are invalid</div>
        )}
        <button type="submit">Create Idea</button>
      </form>
    </Segment>
  );
};
