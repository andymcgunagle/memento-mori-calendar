export default function Select({ onChange, value, children }: SelectProps) {
  return (
    <select
      onChange={onChange}
      value={value}
      className="px-2 py-1 border-b-2 border-gray-900"
    >
      {children}
    </select>
  );
};

interface SelectProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>,
  value: string | number,
  children: JSX.Element[],
};