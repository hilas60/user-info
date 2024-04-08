import { Typography } from '@mui/material';
import React from 'react';
import { UserInfo } from '../hooks/useUserInfo';

interface UserInfoProps {
  userInfo: UserInfo;
}

export const UserInfoReviewStep: React.FC<UserInfoProps> = ({ userInfo }) => (
  <>
    <Typography variant="h6">User Information Summary</Typography>
    <Typography>First Name: {userInfo.firstName}</Typography>
    <Typography>Last Name: {userInfo.lastName}</Typography>
    <Typography>Age: {userInfo.age}</Typography>
  </>
);
