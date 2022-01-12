export default function Heading({ children }: HeadingProps) {
  return (
    <h1 className="text-4xl md:text-5xl font-serif">
      {children}
    </h1>
  );
};

interface HeadingProps {
  children: string,
};