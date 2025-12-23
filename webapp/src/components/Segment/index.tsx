import scss from "./index.module.scss";

export const Segment = ({
  title,
  size = 1,
  description,
  children,
}: {
  title: React.ReactNode;
  size?: 1 | 2;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={scss.segment}>
      {size === 1 ? (
        <h1 className={scss.title}>{title}</h1>
      ) : (
        <h2 className={scss.title}>{title}</h2>
      )}
      {description && <p className={scss.description}>{description}</p>}
      {children && <div className={scss.content}>{children}</div>}
    </div>
  );
};
