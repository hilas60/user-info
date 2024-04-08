import { TextField } from '@mui/material';
import React from 'react';

interface UserAgeProps {
  age: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserAgeStep: React.FC<UserAgeProps> = ({ age, handleChange }) => (
  <TextField
    label="Age"
    type="number"
    variant="outlined"
    name="age"
    value={age}
    onChange={handleChange}
    inputProps={{ min: 1, max: 100 }}
  />
);
