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
  const value = formik.values[name];
  const error = formik.errors[name] as string | undefined;
  const touched = formik.touched[name];

  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}:</label>
      <br />
      <input
        value={value}
        type="text"
        name={name}
        id={name}
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value);
        }}
        onBlur={() => void formik.setFieldTouched(name)}
      />
      {!!touched && !!error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};
