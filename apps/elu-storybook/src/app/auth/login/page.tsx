'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Typography } from '@eluelu/elu-ui/components/typography';
import { LoginForm, type LoginFormData } from '@/components/auth/login/form';
import { pagePath } from '@/constants/page-path';
import { useAuth } from '@/hooks/auth';

const LoginPage: RC = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.replace(pagePath.home);
    }
  }, [loading, user, router]);

  const handleLoginSuccess = async (_data: LoginFormData) => {
    router.push(pagePath.home);
  };

  const handleLoginError = (error: Error) => {
    console.error('Login failed:', error);
  };

  return (
    <div className="flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Logo 和標題 */}
        <div className="text-center">
          <Typography variant="h1">歡迎回來</Typography>
          <Typography className="mt-2" color="muted" variant="lead">
            請使用您的手機號碼登入
          </Typography>
        </div>

        {/* 登入表單 */}
        <LoginForm
          onError={handleLoginError}
          onForgotPassword={() => {
            // TODO: 實作忘記密碼功能
            console.log('忘記密碼');
          }}
          onRegister={() => {
            router.push(pagePath.auth.register);
          }}
          onSuccess={handleLoginSuccess}
        />
      </div>
    </div>
  );
};

export default LoginPage;
