import { Segment } from "../../components/Segment";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { useFormik } from "formik";
import { withZodSchema } from "formik-validator-zod";
import { trpc } from "../../lib/trpc";
import { zCreateIdeaTRpcInput } from "@fullstack-js/backend/src/router/createIdea/input";
import { useState } from "react";

export const NewIdeaPage = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [submittingError, setSubmittingError] = useState<string | null>(null);

  const createIdea = trpc.createIdea.useMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      id_: "",
      description: "",
      text: "",
    },
    validate: withZodSchema(zCreateIdeaTRpcInput),
    onSubmit: async (values) => {
      setSubmittingError(null);
      try {
        await createIdea.mutateAsync(values);
        formik.resetForm();
        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);
        }, 3000);
      } catch (error) {
        setSubmittingError(
          error instanceof Error ? error.message : "An error occurred",
        );
        setTimeout(() => {
          setSubmittingError(null);
        }, 3000);
      }
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
        {!!submittingError && (
          <div style={{ color: "red" }}>{submittingError}</div>
        )}
        {!!successMessageVisible && (
          <div style={{ color: "green" }}>Idea created</div>
        )}
        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Submitting ..." : "Create Idea"}
        </button>
      </form>
    </Segment>
  );
};
