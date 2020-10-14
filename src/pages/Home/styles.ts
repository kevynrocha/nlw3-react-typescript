import styled from 'styled-components';
import { Link as HappyLink } from 'react-router-dom';
import LandingImg from '../../assets/images/landing.svg';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${LandingImg}) no-repeat 80% center;
`;

export const Title = styled.h1`
  max-width: 350px;
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

export const Subtitle = styled.h1`
  margin-top: 40px;
  max-width: 350px;
  font-size: 24px;
  line-height: 34px;
`;
export const City = styled.strong`
  font-weight: 800;
`;
export const State = styled.span``;

export const Main = styled.main``;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;
`;

export const Link = styled(HappyLink)`
  position: absolute;
  right: 0;
  bottom: 0;

  background-color: #ffd666;
  color: rgba(0, 0, 0, 0.6);
  height: 80px;
  width: 80px;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: #96feff;
  }
`;
