import { ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { NavItem } from './styles';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

const ActiveLink = ({ children, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  console.log(asPath);
  console.log(rest.href);

  const active = asPath === rest.href;

  console.log(active);

  return (
    <Link {...rest}>
      <NavItem active={active}>{children}</NavItem>
    </Link>
  );
};

export default ActiveLink;
