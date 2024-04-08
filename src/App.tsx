import { useState } from 'react';
import styled from '@emotion/styled';
import { UserInfoModal } from './UserInfoModal/UserInfoModal';
import { Button } from '@mui/material';

const AppHeader = styled.header`
  display: flex;
  justify-content: center;
`;

export const App = () => {
  return (
    <div className="App">
      <AppHeader>
        <h1>User Info Stepper</h1>
      </AppHeader>

      <UserInfoModal />
    </div>
  );
};
