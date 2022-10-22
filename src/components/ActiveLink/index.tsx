import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Item } from './styles';

type ActiveLinkProps = {
  href: string;
  children: ReactNode;
};

export const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const active = asPath === href;

  return (
    <Link href={href} passHref>
      <Item active={active}>{children}</Item>
    </Link>
  );
};
