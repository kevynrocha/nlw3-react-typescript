import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { FiPlus } from 'react-icons/fi';
import MapMarker from '../../assets/images/MapMarker.svg';

import {
  Wrapper,
  Aside,
  Header,
  Title,
  SubTitle,
  Footer,
  City,
  State,
  Link,
} from './styles';

const mapStyles = {
  width: '100%',
  height: '100%',
  zIndex: 0,
};

const OrphanagesMap: React.FC = () => (
  <Wrapper>
    <Aside>
      <Header>
        <img src={MapMarker} alt="Happy" />
        <Title>Escolha um orfanato no mapa</Title>
        <SubTitle>Muitas crianças estão esperando a sua visita :)</SubTitle>
      </Header>
      <Footer>
        <City>Rio do Sul</City>
        <State>Santa Catarina</State>
      </Footer>
    </Aside>

    <Map center={[-20.5227256, -54.6424034]} zoom={15} style={mapStyles}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
    </Map>

    <Link to="/create">
      <FiPlus size={32} />
    </Link>
  </Wrapper>
);

export default OrphanagesMap;
