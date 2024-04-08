import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import React from 'react';

interface UserNameStepProps {
  firstName?: string;
  lastName?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserNameInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const UserNameStep: React.FC<UserNameStepProps> = ({
  handleChange,
  firstName,
  lastName,
}) => (
  <>
    <TextField
      label="First Name"
      variant="outlined"
      name="firstName"
      value={firstName}
      onChange={handleChange}
    />
    <TextField
      label="Last Name"
      variant="outlined"
      name="lastName"
      value={lastName}
      onChange={handleChange}
    />
  </>
);
