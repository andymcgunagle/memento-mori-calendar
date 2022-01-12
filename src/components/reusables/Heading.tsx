export default function Heading({ children }: HeadingProps) {
  return (
    <h1 className="text-2xl md:text-4xl font-serif">
      {children}
    </h1>
  );
};

interface HeadingProps {
  children: string,
};