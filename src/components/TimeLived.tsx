export default function TimeLived({ weeksLived }: TimeLivedProps) {
  return (
    <div className="flex gap-4">
      <div>
        {weeksLived * 7} days lived
      </div>
      <div>
        {weeksLived.toFixed(1)} weeks lived
      </div>
      <div>
        {(weeksLived / 52).toFixed(1)} years lived
      </div>
    </div>
  );
};

interface TimeLivedProps {
  weeksLived: number
};