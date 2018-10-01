import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';

export default function StatusSection(props) {
  const { guesses } = props;
  const guessCount = guesses.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
    </section>
  );
}
