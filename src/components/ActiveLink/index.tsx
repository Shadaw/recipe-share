import { ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { NavItem } from './styles';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

const ActiveLink = ({ children, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const active = asPath === rest.href;

  return (
    <Link {...rest}>
      <NavItem active={active}>{children}</NavItem>
    </Link>
  );
};

export default ActiveLink;
