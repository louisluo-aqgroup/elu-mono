'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { parsePhoneNumberWithError } from 'libphonenumber-js';
import { DevTool } from '@hookform/devtools';
import { Button } from '@eluelu/elu-ui/components/button';
import { Input } from '@eluelu/elu-ui/components/input';
import { Typography } from '@eluelu/elu-ui/components/typography';

const PhoneInput = dynamic(
  () =>
    import('@eluelu/elu-ui/components/phone-input').then(
      (mod) => mod.PhoneInput
    ),
  {
    ssr: false,
    loading: () => {
      const {
        PhoneInputSkeleton,
      } = require('@eluelu/elu-ui/components/phone-input');
      return <PhoneInputSkeleton />;
    },
  }
);

const phoneNumberSchema = z
  .string()
  .min(1, '請輸入手機號碼')
  .refine((value) => {
    try {
      return parsePhoneNumberWithError(value).isValid();
    } catch {
      return false;
    }
  }, '請輸入有效的手機號碼');

const loginSchema = z.object({
  phoneNumber: phoneNumberSchema,
  password: z.string().min(6, '密碼至少需要 6 個字元'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
type LoginFormValues = z.input<typeof loginSchema>;

export interface LoginFormProps {
  onSuccess?: (data: LoginFormData) => void | Promise<void>;
  onError?: (error: Error) => void;
  onForgotPassword?: () => void;
  onRegister?: () => void;
}

export const LoginForm: RCC<LoginFormProps> = ({
  onSuccess,
  onError,
  onForgotPassword,
  onRegister,
}) => {
  const [generalError, setGeneralError] = useState('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (formValues) => {
    setGeneralError('');
    try {
      const parsedData = loginSchema.parse(formValues);
      await onSuccess?.(parsedData);
    } catch (error) {
      const err = error instanceof Error ? error : new Error('登入失敗');
      setGeneralError(err.message || '登入失敗,請檢查您的手機號碼和密碼');
      onError?.(err);
    }
  });

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <div className="space-y-4">
          <div>
            <Typography asChild className="mb-2 block" variant="small">
              <label htmlFor="phone">手機號碼</label>
            </Typography>
            <Controller
              control={control}
              name="phoneNumber"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                console.log(error)
                return (
                  <>
                    <PhoneInput
                      disabled={isSubmitting}
                      error={!!error}
                      id="phone"
                      onChange={(value, e164) => {
                        console.log(value, e164);
                        onChange(value);
                      }}
                      value={value}
                    />
                    {error && (
                      <Typography
                        className="mt-1 font-normal"
                        color="error"
                        variant="xs"
                      >
                        {error.message}
                      </Typography>
                    )}
                  </>
                );
              }}
            />
          </div>

          <div>
            <Typography asChild className="mb-2 block" variant="small">
              <label htmlFor="password">密碼</label>
            </Typography>
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState }) => (
                <>
                  <Input
                    aria-invalid={!!fieldState.error}
                    autoComplete="current-password"
                    disabled={isSubmitting}
                    id="password"
                    placeholder="請輸入密碼"
                    type="password"
                    {...field}
                  />
                  {fieldState.error && (
                    <Typography
                      className="mt-1 font-normal"
                      color="error"
                      variant="xs"
                    >
                      {fieldState.error.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </div>
        </div>

        {onForgotPassword && (
          <div className="flex items-center justify-end">
            <button
              className="text-sm text-primary hover:underline"
              onClick={onForgotPassword}
              type="button"
            >
              忘記密碼?
            </button>
          </div>
        )}

        {generalError && (
          <div className="rounded-md bg-destructive/10 p-3">
            <Typography color="error" variant="small">
              {generalError}
            </Typography>
          </div>
        )}

        <Button
          className="w-full"
          disabled={isSubmitting}
          size="lg"
          type="submit"
        >
          {isSubmitting ? '登入中...' : '登入'}
        </Button>

        {onRegister && (
          <div className="text-center">
            <Typography color="muted" variant="small">
              還沒有帳號?{' '}
              <button
                className="text-primary hover:underline"
                onClick={onRegister}
                type="button"
              >
                立即註冊
              </button>
            </Typography>
          </div>
        )}
      </form>
      <DevTool control={control} />
    </>
  );
};
