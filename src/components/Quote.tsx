import { useState } from "react";
import { getRandomQuote } from "../data/quotes";

export default function Quote() {
  const [randomQuote, setRandomQuote] = useState(getRandomQuote());

  return (
    <div
      onClick={() => setRandomQuote(getRandomQuote())}
      className="flex flex-col items-center gap-2 text-center cursor-pointer"
    >
      <p className="font-light italic">
        "{randomQuote.quote}"
      </p>
      <p>
        - {randomQuote.author}
      </p>
    </div>
  );
};