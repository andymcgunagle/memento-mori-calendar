export default function Box({ lived, number }: BoxProps) {
  if (number === 0) return <div className="h-4 w-4 bg-blue-500 flex justify-center items-center text-xs"></div>;

  if (number !== 0 && number % 52 === 0) return <div className="h-4 w-4 bg-red-500 flex justify-center items-center text-xs">{number / 52}</div>;

  if (lived) return <div className="h-4 w-4 bg-gray-900"></div>;

  return <div className="h-4 w-4 border-2 border-gray-900"></div>;
};

type BoxProps = {
  number: number,
  lived: boolean,
}