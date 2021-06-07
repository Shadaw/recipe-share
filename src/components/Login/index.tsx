import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAuth } from 'hooks/auth';

import { Container, ErrorBox } from './styles';

type FormProps = {
  email: string;
  password: string;
};

type LoginProps = {
  handleClose: () => void;
};

const Login = ({ handleClose }: LoginProps) => {
  const { register, handleSubmit, reset } = useForm<FormProps>();
  const { signIn } = useAuth();
  const [error, setError] = useState(false);

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

  return (
    <Container onSubmit={handleSubmit(handleLogin)}>
      <img src="/images/logo-min.svg" alt="livro de culinaria" />
      {error && <ErrorBox>E-mail e/ou senha incorretas</ErrorBox>}
      <label>
        E-mail
        <input {...register('email', { required: true })} type="text" />
      </label>
      <label>
        Senha
        <input {...register('password', { required: true })} type="password" />
      </label>
      <button type="submit">Entrar</button>
    </Container>
  );
};

export default Login;
