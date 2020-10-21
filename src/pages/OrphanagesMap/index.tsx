import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import MapMarker from '../../assets/images/map-marker.svg';

import {
  Wrapper,
  Aside,
  Header,
  Title,
  SubTitle,
  Footer,
  City,
  State,
  Popup,
  CreateButton,
} from './styles';

const mapIcon = Leaflet.icon({
  iconUrl: MapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

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
        <City>Campo Grande</City>
        <State>Mato Grosso do Sul</State>
      </Footer>
    </Aside>

    <Map center={[-20.5227256, -54.6424034]} zoom={15} style={mapStyles}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
      <Marker icon={mapIcon} position={[-20.5227256, -54.6424034]}>
        <Popup closeButton={false} minWidth={240} maxWidth={240}>
          Lar das meninas
          <Link to="/orphanages/1">
            <FiArrowRight size={20} color="#fff" />
          </Link>
        </Popup>
      </Marker>
    </Map>

    <CreateButton to="/orphanages/create">
      <FiPlus size={32} />
    </CreateButton>
  </Wrapper>
);

export default OrphanagesMap;
