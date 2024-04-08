import { useState } from 'react';

interface UseStepHook {
  currentStep: number;
  isLastStep: boolean;
  isFirstStep: boolean;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  resetSteps: () => void;
}

export const useStep = (totalSteps: number): UseStepHook => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => setCurrentStep(prevStep => Math.min(prevStep + 1, totalSteps));
  const goToPreviousStep = () => setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
  const resetSteps = () => setCurrentStep(1);

  return {
    currentStep,
    isLastStep: currentStep === totalSteps,
    isFirstStep: currentStep === 1,
    goToNextStep,
    goToPreviousStep,
    resetSteps,
  };
};
