import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Popup as LeafletPopup, PopupProps } from 'react-leaflet';

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

export const Popup = styled(LeafletPopup)<PopupProps>`
  .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #15c3d6;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;

export const CreateButton = styled(Link)`
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
