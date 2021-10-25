import React from 'react'

const QuoteCard = ({quotes}) => (
    <figure className="QuoteCard">
      <img src={quotes.image} alt={quotes.character} />
      <figcaption>
        <blockquote>{quotes.quote}</blockquote>
        <cite>{quotes.character}</cite>
      </figcaption>
    </figure>
  );
  
//name, photo, quote


export default QuoteCard

