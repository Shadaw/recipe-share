import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { FormProps } from 'pages/new';

import Markdown from 'components/Markdown';

import { Container, Preview } from './styles';

type TextareaWithPreview = {
  label: string;
  register: UseFormRegister<FormProps>;
};

export const TextareaWithPreview = ({
  label,
  register,
}: TextareaWithPreview) => {
  const [showPreview, setShowPreview] = useState(false);
  const [preview, setPreview] = useState('');

  return (
    <Container>
      <label>
        {label}
        {!showPreview && (
          <textarea
            rows={10}
            {...register('description', {
              required: true,
              validate: value => {
                setPreview(value);
                return true;
              },
            })}
          ></textarea>
        )}
      </label>
      {showPreview && (
        <Preview>
          <Markdown>{preview}</Markdown>
        </Preview>
      )}
      <button
        title="visualizar"
        type="button"
        onClick={() => setShowPreview(!showPreview)}
      >
        {showPreview ? <FiEyeOff /> : <FiEye />}
      </button>
    </Container>
  );
};

export default TextareaWithPreview;
