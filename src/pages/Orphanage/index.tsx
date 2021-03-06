import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

import api from '../../services/api';

import mapMarkerImg from '../../assets/images/map-marker.svg';
import Sidebar from '../../components/Sidebar';
import Map from '../../components/Map';

import './styles.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

type Image = {
  id: number;
  url: string;
};

interface IOrphanage {
  id: number;
  name: string;
  about: string;
  latitude: number;
  longitude: number;
  instructions: string;
  open_on_weekends: boolean;
  opening_hours: string;
  images: Image[];
}

interface IOrphanageParams {
  id: string;
}

const Orphanage = () => {
  const [orphanage, setOrphanage] = useState<IOrphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { id } = useParams<IOrphanageParams>();

  const fetchOrphanage = useCallback(async () => {
    const response = await api.get(`orphanages/${id}`);
    setOrphanage(response.data);
  }, [id]);

  useEffect(() => {
    fetchOrphanage();
  }, [fetchOrphanage]);

  if (!orphanage) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div id="page-orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <div className="images">
            {orphanage.images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setActiveImageIndex(index)}
                className={activeImageIndex === index ? 'active' : ''}
                type="button"
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map
                interactive={false}
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
              >
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude}, ${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orphanage;
