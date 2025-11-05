'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
  type UserCredential,
} from 'firebase/auth';

import { auth } from '@/lib/firebase';

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  signIn: (identifier: string, password: string) => Promise<UserCredential>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

const phoneToAuthEmail = (phoneNumber: string): string => {
  const sanitized = phoneNumber.replace(/[^\d+]/g, '');
  if (!sanitized) {
    throw new Error('無效的電話號碼');
  }

  const normalized = sanitized.startsWith('+') ? sanitized.slice(1) : sanitized;

  return `${normalized}@phone-login.elu`;
};

const resolveIdentifier = (identifier: string): string => {
  if (identifier.includes('@')) {
    return identifier;
  }
  return phoneToAuthEmail(identifier);
};

export const AuthProvider: RCC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = useCallback(
    async (identifier: string, password: string) => {
      setLoading(true);
      try {
        const credential = await signInWithEmailAndPassword(
          auth,
          resolveIdentifier(identifier),
          password
        );
        setUser(credential.user);
        return credential;
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleSignOut = useCallback(async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } finally {
      setLoading(false);
      setUser(null);
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      signIn,
      signOut: handleSignOut,
    }),
    [user, loading, signIn, handleSignOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 需在 AuthProvider 中使用');
  }
  return context;
};
