import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Container } from './styles';

interface MarkdownProps {
  children: string;
}

const Markdown = ({ children }: MarkdownProps) => {
  return (
    <Container>
      <ReactMarkdown>{children}</ReactMarkdown>
    </Container>
  );
};

export default Markdown;
