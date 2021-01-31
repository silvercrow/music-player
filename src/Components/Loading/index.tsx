import React from 'react';
import { Page, Container, Wrapper, Loader } from './styles';

const Loading: React.FC = () => {
  return (
    <Page>
      <Container>
        <Wrapper>
          <Loader>Loading...</Loader>
        </Wrapper>
      </Container>
    </Page>
  );
};

export default Loading;
