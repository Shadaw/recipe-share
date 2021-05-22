import { ReactNode, createContext, useState, useContext } from 'react';

type ModalContextData = {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
};

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

type ModalProviderProps = {
  children: ReactNode;
};

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  return context;
}
