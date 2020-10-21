import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import { Aside, Image, Button } from './styles';

export default function Sidebar() {
  const { goBack } = useHistory();

  return (
    <Aside>
      <Image src={mapMarkerImg} alt="Happy" />
      <footer>
        <Button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </Button>
      </footer>
    </Aside>
  );
}
