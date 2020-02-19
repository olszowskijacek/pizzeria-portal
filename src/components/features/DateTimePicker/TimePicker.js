import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; 
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function TPicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  );
}