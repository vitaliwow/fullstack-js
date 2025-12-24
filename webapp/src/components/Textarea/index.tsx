import type { FormikProps } from "formik";
import scss from "./index.module.scss";

import cn from 'classnames'

export const Textarea = <T extends Record<string, string>>({
  name,
  label,
  formik,
}: {
  name: keyof T & string;
  label: string;
  formik: FormikProps<T>;
}) => {
  const touched = formik.touched[name];
  const error = formik.errors[name] as string | undefined;
  const disabled = formik.isSubmitting
  const invalid = !!touched && !!error

  
  return (
    <div className={ cn({[scss.field]: true, [scss.disabled]: disabled}) }>
      <label className={scss.label} htmlFor={name}>
        {label}:
      </label>
      <textarea
        className={
            cn({
                [scss.input]: true,
                [scss.invalid]: invalid
            })
        }
        />
      {invalid && <div className={ scss.error}>{error}</div>}
    </div>
  );
};
