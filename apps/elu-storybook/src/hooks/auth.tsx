'use client';

import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';

import { loginApi } from '@/apis/auth';
import { auth } from '@/lib/firebase';
import type { LoginRequest } from '@/types/apis/auth';

// 登入
export const useSignIn = () => {
  return useMutation({
    mutationFn: async ({ phone, password }: LoginRequest) => {
      // 1. 先呼叫你的 API 取得 email
      const apiResponse = await loginApi({ phone, password });

      if (apiResponse.success !== true) {
        throw new Error(
          apiResponse.message || '登入失敗,請檢查您的手機號碼和密碼'
        );
      }

      const email = apiResponse.data?.email;

      if (!email) {
        throw new Error('查無此帳號或密碼不正確');
      }

      // 2. 用取得的 email 登入 Firebase
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      return credential;
    },
  });
};

// 登出
export const useSignOut = () => {
  return useMutation({
    mutationFn: async () => {
      await firebaseSignOut(auth);
    },
  });
};

// Auth hook - 提供當前使用者狀態
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const signOutMutation = useSignOut();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    await signOutMutation.mutateAsync();
  };

  return {
    user,
    loading,
    signOut,
  };
};
