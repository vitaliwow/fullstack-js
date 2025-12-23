import type { FormikProps } from "formik";

export const Textarea = <T extends Record<string, string>>({
  name,
  label,
  formik,
}: {
  name: keyof T & string;
  label: string;
  formik: FormikProps<T>;
}) => {
  const value = formik.values[name];
  const error = formik.errors[name] as string | undefined;

  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}:</label>
      <br />
      <textarea
        name={name}
        id={name}
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value);
        }}
        value={value}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};
