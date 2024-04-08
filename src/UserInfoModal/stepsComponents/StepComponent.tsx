import React from 'react';
import { UserNameStep } from './UserNameStep';
import { UserAgeStep } from './UserAgeStep';
import { UserInfoReviewStep } from './UserInfoReviewStep';
import { UserInfo } from '../hooks/useUserInfo';

interface StepComponentProps {
  currentStep: number;
  userInfo: UserInfo;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StepComponent: React.FC<StepComponentProps> = ({
  currentStep,
  userInfo,
  handleChange,
}) => {
    const { firstName, lastName, age} = userInfo;
  const stepComponents: { [stepNumber: number]: JSX.Element } = {
    1: (
      <UserNameStep
        firstName={firstName}
        lastName={lastName}
        handleChange={handleChange}
      />
    ),
    2: <UserAgeStep age={age} handleChange={handleChange} />,
    3: <UserInfoReviewStep userInfo={userInfo} />,
  };

  return stepComponents[currentStep] || <div>Step not found</div>;
};
