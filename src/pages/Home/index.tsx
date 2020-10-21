import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import {
  Wrapper,
  Container,
  Main,
  Location,
  Link,
  Title,
  Subtitle,
  City,
  State,
} from './styles';
import Logo from '../../assets/images/logo.svg';

const Home: React.FC = () => (
  <Wrapper>
    <Container>
      <img src={Logo} alt="Happy" />
      <Main>
        <Title>Leve felicidade para o mundo</Title>
        <Subtitle>Visite orfanatos e mude o dia de muitas crianças.</Subtitle>
      </Main>

      <Location>
        <City>Campo Grande</City>
        <State>Mato Grosso do Sul</State>
      </Location>

      <Link to="/app">
        <FiArrowRight size={26} />
      </Link>
    </Container>
  </Wrapper>
);

export default Home;
