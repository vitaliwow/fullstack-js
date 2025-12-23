import type { FormikProps } from "formik";

export const Input = <T extends Record<string, string>>({
  name,
  label,
  formik,
}: {
  name: keyof T & string;
  label: string;
  formik: FormikProps<T>;
}) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}:</label>
      <br />
      <input
        type="text"
        name={name}
        id={name}
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value);
        }}
      />
    </div>
  );
};
