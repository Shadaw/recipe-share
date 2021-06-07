import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import api from 'services/api';

import { Container } from './styles';

type FormProps = {
  name: string;
  email: string;
  password: string;
};

type RegisterProps = {
  handleShowLogin: (param: boolean) => void;
};

const Register = ({ handleShowLogin }: RegisterProps) => {
  const { register, handleSubmit, reset } = useForm<FormProps>();

  const handleRegister: SubmitHandler<FormProps> = useCallback(
    async data => {
      try {
        await api.post('/users', data);

        reset();
        handleShowLogin(true);
      } catch {
        console.log('erro');
      }
    },
    [reset, handleShowLogin],
  );

  return (
    <Container onSubmit={handleSubmit(handleRegister)}>
      <img src="/images/logo-min.svg" alt="livro de culinaria" />
      <label>
        Nome
        <input {...register('name', { required: true })} type="text" />
      </label>
      <label>
        E-mail
        <input {...register('email', { required: true })} type="text" />
      </label>
      <label>
        Senha
        <input {...register('password', { required: true })} type="password" />
      </label>
      <button type="submit">Registrar</button>
    </Container>
  );
};

export default Register;
