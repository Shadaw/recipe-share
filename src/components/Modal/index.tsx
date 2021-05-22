import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';

import { useModal } from 'hooks/modal';

import { Background, Container, Header, Content, ErrorBox } from './styles';
import { useAuth } from 'hooks/auth';

type FormProps = {
  email: string;
  password: string;
};

const Modal = () => {
  const { register, handleSubmit, reset } = useForm<FormProps>();
  const { isOpen, setIsOpen } = useModal();
  const { signIn } = useAuth();
  const [error, setError] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleLogin: SubmitHandler<FormProps> = useCallback(
    async data => {
      setError(false);
      try {
        await signIn(data);
        handleClose();
      } catch {
        setError(true);
      }
      reset();
    },
    [signIn, reset, handleClose],
  );

  return isOpen ? (
    <Background>
      <Container>
        <Header>
          <button onClick={handleClose}>
            <FiX />
          </button>
        </Header>
        <Content onSubmit={handleSubmit(handleLogin)}>
          <img src="images/logo-min.svg" alt="livro de culinaria" />
          {error && <ErrorBox>E-mail e/ou senha incorretas</ErrorBox>}
          <label>
            E-mail
            <input {...register('email', { required: true })} type="text" />
          </label>
          <label>
            Senha
            <input
              {...register('password', { required: true })}
              type="password"
            />
          </label>
          <button type="submit">Entrar</button>
        </Content>
      </Container>
    </Background>
  ) : (
    <></>
  );
};

export default Modal;
