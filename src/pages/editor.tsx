import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['clean'],
  ],
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
];

const Editor = () => {
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (content: string) => {
      setValue(content);
    },
    [setValue],
  );

  return (
    <>
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        theme="snow"
        value={value}
        onChange={handleChange}
      />
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </>
  );
};

export default Editor;
