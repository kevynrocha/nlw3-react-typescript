import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Marker } from 'react-leaflet';

import api from '../../services/api';

import MapMarker from '../../assets/images/map-marker.svg';
import mapIcon from '../../components/Map/happMapIcon';
import Map from '../../components/Map';
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

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  const fetchOrphanages = useCallback(async () => {
    const response = await api.get('orphanages');
    setOrphanages(response.data);
  }, []);

  useEffect(() => {
    fetchOrphanages();
  }, [fetchOrphanages]);

  return (
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

      <Map>
        {orphanages.map((orphanage) => (
          <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240}>
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <CreateButton to="/orphanages/create">
        <FiPlus size={32} />
      </CreateButton>
    </Wrapper>
  );
};

export default OrphanagesMap;
