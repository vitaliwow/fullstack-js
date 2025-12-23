export const Input = <T extends Record<string, string>>({
  name,
  label,
  state,
  setState,
}: {
  name: keyof T & string;
  label: string;
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
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
          setState({
            ...state,
            [name]: e.target.value,
          } as T);
        }}
        value={state[name] ?? ""}
      />
    </div>
  );
};
