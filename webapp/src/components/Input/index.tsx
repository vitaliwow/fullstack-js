import type { FormikProps } from "formik";
import scss from "./index.module.scss";

import cn from 'classnames'

export const Input = <T extends Record<string, string>>({
  name,
  label,
  formik,
  maxWidth,
}: {
  name: keyof T & string;
  label: string;
  formik: FormikProps<T>;
  maxWidth?: number;
}) => {
  const value = formik.values[name];
  const error = formik.errors[name] as string | undefined;
  const touched = formik.touched[name];
  const disabled = formik.isSubmitting
  const invalid = !!touched && !!error

  return (
    <div className={ cn({[scss.field]: true, [scss.disabled]: disabled}) }>
      <label className={scss.label} htmlFor={name}>
        {label}:
      </label>
      <input
        className={
            cn({
                [scss.input]: true,
                [scss.invalid]: invalid
            })
        }
        style={{maxWidth}}
        value={value}
        type="text"
        name={name}
        id={name}
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value);
        }}
        onBlur={() => void formik.setFieldTouched(name)}
        disabled={formik.isSubmitting}
      />
      {invalid && <div className={scss.error}>{error}</div>}
    </div>
  );
};
