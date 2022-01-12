export default function Box({ lived, number }: BoxProps) {
  const baseStyles = `h-6 w-6 flex justify-center items-center text-xs border-2 border-gray-900`;

  if (number % 52 === 0) return (
    <div className={`${lived ? "bg-gray-900 text-gray-50" : null} ${baseStyles}`}>
      {number / 52}
    </div>
  );

  if (lived) return <div className={`bg-gray-900 ${baseStyles}`}></div>;

  return <div className={`${baseStyles}`}></div>;
};

interface BoxProps {
  number: number,
  lived: boolean,
};