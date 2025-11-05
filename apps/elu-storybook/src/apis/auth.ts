import { useMutation } from '@tanstack/react-query';

import { useAuth } from '@/hooks/auth';
import { axios } from '@/lib/axios';
import { LoginRequest, LoginResponse } from '@/types/apis/auth';

export const loginApi = (payload: LoginRequest) => {
  return axios.post<LoginResponse>('/client/auth/login', payload);
};

export const useLoginMutation = () => {
  const { signIn } = useAuth();

  return useMutation({
    mutationFn: async ({ phone, password }: LoginRequest) => {
      const response = await loginApi({ phone, password });

      const email = response.data.data?.email;

      if (!email) {
        throw new Error('查無此帳號或密碼不正確');
      }

      const authResult = await signIn(email, password);

      if (!authResult.user) {
        throw new Error('查無此帳號或密碼不正確');
      }

      return authResult;
    },
  });
};
