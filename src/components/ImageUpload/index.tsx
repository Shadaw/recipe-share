import { UseFormRegister } from 'react-hook-form';
import { Container } from './styles';

import { FormProps } from 'pages/new';
import { useCallback, useState } from 'react';

type ImageUpload = {
  register: UseFormRegister<FormProps>;
  value?: string;
};

const ImageUpload = ({ register, value = '' }: ImageUpload) => {
  const [previewImage, setPreviewImage] = useState(value);

  const handleChangeImagePreview = useCallback((image: File[]) => {
    const selectedImage = Array.from(image);

    if (selectedImage) {
      setPreviewImage(URL.createObjectURL(selectedImage[0]));
    }

    return true;
  }, []);

  return (
    <Container>
      {!previewImage ? (
        'Selecione sua image'
      ) : (
        <div>
          <img src={previewImage}></img>
          <p>Clique para selecionar outra imagem</p>
        </div>
      )}
      <input
        aria-hidden="true"
        type="file"
        accept="image/*"
        {...register('image', {
          required: true,
          validate: handleChangeImagePreview,
        })}
      />
    </Container>
  );
};

export default ImageUpload;
