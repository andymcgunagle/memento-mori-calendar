const quotes = [
  {
    quote: `Think of the life you have lived until now as over and, as a dead man, see what's left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?`,
    author: `Marcus Aurelius`,
  },
  {
    quote: `In your actions, don't procrastinate. In your conversations, don't confuse. In your thoughts, don't wander. In your soul, don't be passive or aggressive. In your life, don't be all about business.`,
    author: `Marcus Aurelius`,
  },
  {
    quote: `It's time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet.`,
    author: `Marcus Aurelius`,
  },
  {
    quote: `You could leave life right now. Let that determine what you do and say and think.`,
    author: `Marcus Aurelius`,
  },
  {
    quote: `He who fears death will never do anything worth of a man who is alive.`,
    author: "Seneca"
  },
  {
    quote: `This is our big mistake: to think we look forward to death. Most of death is already gone. Whatever time has passed is owned by death.`,
    author: "Seneca"
  },
  {
    quote: `Life is very short and anxious for those who forget the past, neglect the present, and fear the future.`,
    author: "Seneca"
  },
  {
    quote: `People are frugal in guarding their personal property; but as soon as it comes to squandering time they are most wasteful of the one thing in which it is right to be stingy.`,
    author: "Seneca"
  },
  {
    quote: `How long are you going to wait before you demand the best for yourself?`,
    author: "Epictetus",
  },
  {
    quote: `First say to yourself what you would be; and then do what you have to do.`,
    author: "Epictetus",
  },
  {
    quote: `Curb your desire—don't set your heart on so many things and you will get what you need.`,
    author: "Epictetus",
  },
  {
    quote: `The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. Where then do I look for good and evil? Not to uncontrollable externals, but within myself to the choices that are my own…`,
    author: "Epictetus",
  },
];

export const getRandomQuote = () => quotes[Math.floor(Math.random() * (quotes.length - 0) + 0)];