import { useAuth } from 'hooks/auth';
import { useModal } from 'hooks/modal';
import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import api from 'services/api';
import {
  Container,
  Comment,
  Title,
  NoLogin,
  NoComment,
  Loading,
} from './styles';

type FormProps = {
  message: string;
};

type Comment = {
  id: string;
  message: string;
  created_at: string;
  updated_at: string;
  user: {
    name: string;
    email: string;
  };
};

type CommentsProps = {
  recipe_id: string;
};

const Comments = ({ recipe_id }: CommentsProps) => {
  const { user, token } = useAuth();
  const { setIsOpen } = useModal();
  const { register, handleSubmit, reset } = useForm<FormProps>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const requestComments = useCallback(async () => {
    const response = await api.get(`comments/${recipe_id}`);

    setLoading(false);

    setComments(response.data);
  }, [recipe_id]);

  useEffect(() => {
    requestComments();
  }, [requestComments]);

  const handleComment: SubmitHandler<FormProps> = useCallback(
    async data => {
      try {
        const payload = {
          ...data,
          recipe_id,
        };

        const response = await api.post('/comments', payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        reset();
        setComments([...comments, { ...response.data, user }]);
      } catch {
        console.log('erro');
      }
    },
    [recipe_id, token, comments, user, reset],
  );

  return (
    <Container>
      <h2>Comentarios</h2>
      {user ? (
        <form onSubmit={handleSubmit(handleComment)}>
          <textarea
            {...register('message', { required: true })}
            rows={5}
          ></textarea>
          <button type="submit">Comentar</button>
        </form>
      ) : (
        <NoLogin>
          <p>Faça login para fazer um comentario</p>
          <button onClick={() => setIsOpen(true)}>Fazer login</button>
        </NoLogin>
      )}

      <>
        {loading && (
          <Loading>
            <div></div>
            <div></div>
            <div></div>
          </Loading>
        )}
        {!loading &&
          comments.map(comment => (
            <Comment key={comment.id}>
              <Title>
                <span>{comment.user.name.substr(0, 1)}</span>
                <h3>{comment.user.name}</h3>
              </Title>
              <div>
                <p>{comment.message}</p>
                <p>{new Date(comment.created_at).toLocaleDateString()}</p>
              </div>
            </Comment>
          ))}
        {!loading && comments.length === 0 && (
          <NoComment>
            <p>Nenhum comentario ainda, seja o primeiro a comentar. 😄</p>
          </NoComment>
        )}
      </>
    </Container>
  );
};

export default Comments;
