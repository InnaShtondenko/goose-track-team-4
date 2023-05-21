import React from 'react';
import { AuthNav } from 'components/AuthNavigate/AuthNavigate';
import FeatureList from '../../components/FeatureList/FeatureList';

import { Container } from './HomePage.styled';

export const HomePage = () => {
  return (
    <div>
      <AuthNav />
      <Container>
        <FeatureList />
      </Container>
    </div>
  );
};

export default HomePage;
