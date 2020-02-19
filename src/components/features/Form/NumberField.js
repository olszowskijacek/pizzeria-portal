import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function BasicNumberFields() {
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="standard-number"
        placeholder="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}