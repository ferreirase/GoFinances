/* eslint-disable no-unused-expressions */
import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { url } = useRouteMatch();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" className={url === '/' ? 'activeLink' : ''}>
            Listagem
          </Link>
          <Link to="/import" className={url === '/import' ? 'activeLink' : ''}>
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
