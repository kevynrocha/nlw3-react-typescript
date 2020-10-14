import styled from 'styled-components';
import { Link as HappyLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header``;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
`;

export const SubTitle = styled.p`
  line-height: 28px;
  margin-top: 24px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;
`;

export const City = styled.strong`
  font-weight: 800;
`;

export const State = styled.span``;

export const Link = styled(HappyLink)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  background-color: #15c3d6;
  color: #fff;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: #17d6eb;
  }
`;
