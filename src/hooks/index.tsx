import { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { ModalProvider } from './modal';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <ModalProvider>{children}</ModalProvider>
  </AuthProvider>
);

export default AppProvider;
