import styled from '@emotion/styled';
import { Button, Modal } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import TextButton from '../components/TextButton';
import { useStep } from './hooks/useStep';
import { UserNameStep, UserAgeStep, UserInfoReviewStep } from './stepsComponents';
import { UserInfo, useUserInfo } from './hooks/useUserInfo';
import { StepComponent } from './stepsComponents/StepComponent';

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserInfoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { currentStep, goToNextStep, goToPreviousStep, isFirstStep, isLastStep, resetSteps } =
    useStep(3);
  const { userInfo, updateUserInfo, saveUserInfo, resetUserInfo, checkValidation } = useUserInfo();

  const isValidInputs = useMemo(
    () => checkValidation(currentStep),
    [userInfo, currentStep, checkValidation],
  );

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleInputChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    updateUserInfo(name as keyof UserInfo, value);
  };

  const handleCloseModal = () => {
    toggleModal();
    resetSteps();
    resetUserInfo();
  };

  const handleFinish = () => {
    // when async this will trigger a loading state (possible spinner) that will wait for success or error of update and act accordingly
    saveUserInfo();
    handleCloseModal();
  };

  return (
    <ModalContainer>
      <Button variant="outlined" onClick={handleFinish} title="Open Modal">
        Open Modal
      </Button>
      <Modal open={isOpen} onClose={toggleModal}>
        <ModalContent>
          <StepComponent
            currentStep={currentStep}
            userInfo={userInfo}
            handleChange={handleInputChange}
          />
          <ButtonContainer>
            <TextButton text="Back" handleClick={goToPreviousStep} isDisabled={isFirstStep} />
            {isLastStep ? (
              <TextButton text="Finish" handleClick={handleFinish} />
            ) : (
              <TextButton text="Next" handleClick={goToNextStep} isDisabled={!isValidInputs} />
            )}
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
};
