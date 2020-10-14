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
import Logo from '../../assets/images/Logo.png';

const Home: React.FC = () => (
  <Wrapper>
    <Container>
      <img src={Logo} alt="Happy" />
      <Main>
        <Title>Leve felicidade para o mundo</Title>
        <Subtitle>Visite orfanatos e mude o dia de muitas crianças.</Subtitle>
      </Main>

      <Location>
        <City>Rio do Sul</City>
        <State>Santa Catarina</State>
      </Location>

      <Link to="/">
        <FiArrowRight size={26} />
      </Link>
    </Container>
  </Wrapper>
);

export default Home;
