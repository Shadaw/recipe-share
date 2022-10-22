import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
});

import { modules, formats } from './config';
import { FormProps } from 'screens/New';

import { Container } from './styles';

type TextareaWithPreview = {
  label: string;
  control?: Control<FormProps>;
};

export const TextareaWithPreview = ({
  label,
  control,
}: TextareaWithPreview) => {
  return (
    <Container>
      <label>{label}</label>
      <Controller
        control={control}
        name="description"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <QuillNoSSRWrapper
            modules={modules}
            formats={formats}
            value={value}
            onChange={onChange}
            theme="snow"
          />
        )}
      />
    </Container>
  );
};

export default TextareaWithPreview;
