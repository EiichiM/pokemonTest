import React from 'react';

function Logo(props) {
  return (
    <img
      alt="Logo Pokemon"
      src="/static/pokemon-logo.png"
      {...props}
    />
  );
}

export default Logo;
