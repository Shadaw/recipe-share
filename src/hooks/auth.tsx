import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

import api from 'services/api';
import { useRouter } from 'next/router';

type AuthState = {
  token: string;
  user: Record<string, string>;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: Record<string, string>;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const [data, setData] = useState<AuthState>(() => {
    const cookies = parseCookies();

    const token = cookies['@RecipesShare:token'];
    const user = cookies['@RecipesShare:user'];

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data;

    setCookie(null, '@RecipesShare:token', token, {
      maxAge: 86400 * 7,
      path: '/',
    });
    setCookie(null, '@RecipesShare:user', JSON.stringify(user), {
      maxAge: 86400 * 7,
      path: '/',
    });

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    destroyCookie(null, '@RecipesShare:token');
    destroyCookie(null, '@RecipesShare:user');

    setData({} as AuthState);

    router.push('/');
  }, [router]);

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
