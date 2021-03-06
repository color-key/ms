import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

interface Props{
  onChange: Function
  value: number
}

export default ({onChange, value}: Props) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
    // setValue(Number((event.target as HTMLInputElement).value));
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value={1} control={<Radio />} label="女士" />
        <FormControlLabel value={0} control={<Radio />} label="先生" />
        {/* <FormControlLabel value={2} control={<Radio />} label="其他" /> */}
      </RadioGroup>
    </FormControl>
  );
}
