import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled, Stack } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function FlexboxGapStack() {
  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      sx={{ width: 200, '& > *': { flexGrow: 1 } }}
    >
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Long content</Item>
    </Stack>
  );
}
