import * as React from 'react';

import Rating from '@mui/material/Rating';

export default function BasicRating() {
  const [value, setValue] = React.useState(5);

  return (
    <Rating name="read-only" value={value} readOnly />
  );
}
