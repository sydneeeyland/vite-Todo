import { ReactNode } from 'react';

import { Grid } from '@mui/material';

type Props = {
  children: ReactNode;
};

function WrappingContainer({ children }: Props) {
  return <Grid container>{children}</Grid>;
}

export default WrappingContainer;
