import { useCallback, useState } from 'react';

export interface UserInfo {
  firstName: string;
  lastName: string;
  age: string;
}

interface UseUserInfoReturn {
  userInfo: UserInfo;
  updateUserInfo: (field: keyof UserInfo, value: string) => void;
  saveUserInfo: () => void;
  resetUserInfo: () => void;
  checkValidation: (step: number) => boolean;
}

export const useUserInfo = (): UseUserInfoReturn => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ firstName: '', lastName: '', age: '' });

  const saveUserInfo = () => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  const updateUserInfo = (field: keyof UserInfo, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const resetUserInfo = () => {
    setUserInfo({ firstName: '', lastName: '', age: '' });
  };

  const checkValidation = useCallback(
    (step: number): boolean => {
      const validationRules: { [key: number]: () => boolean } = {
        1: () => Boolean(userInfo.firstName) && Boolean(userInfo.lastName),
        2: () => Boolean(userInfo.age) && Number(userInfo.age) > 0,
        // Extendable for further steps
      };

      const validate = validationRules[step];
      return validate ? validate() : true;
    },
    [userInfo.firstName, userInfo.lastName, userInfo.age],
  );

  return { userInfo, updateUserInfo, saveUserInfo, resetUserInfo, checkValidation };
};
