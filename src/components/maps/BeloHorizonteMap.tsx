/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

'use client';

import { useEffect, useRef } from 'react';



export default function BeloHorizonteMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Função para carregar o Google Maps
    const loadGoogleMaps = () => {
      if (typeof window !== 'undefined' && window.google) {
        initMap();
        return;
      }

      // Carregar script do Google Maps se não estiver carregado
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Definir callback global
      (window as any).initMap = initMap;
      
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (!mapRef.current) return;

      // Coordenadas do centro de Belo Horizonte
      const beloHorizonte = { lat: -19.9167, lng: -43.9345 };

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 11,
        center: beloHorizonte,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'transit',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
      });

      // Adicionar marcador no centro de BH
      new window.google.maps.Marker({
        position: beloHorizonte,
        map: map,
        title: 'ClimatBH - Área de Atendimento',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#2563eb" stroke="white" stroke-width="4"/>
              <circle cx="20" cy="20" r="8" fill="white"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 20),
        },
      });

      // Adicionar círculo para mostrar área de atendimento
      new window.google.maps.Circle({
        strokeColor: '#2563eb',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#2563eb',
        fillOpacity: 0.1,
        map: map,
        center: beloHorizonte,
        radius: 25000, // 25km de raio
      });

      // Info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 250px;">
            <h3 style="margin: 0 0 10px 0; color: #2563eb; font-size: 16px; font-weight: bold;">ClimatBH</h3>
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Climatização e Refrigeração</p>
            <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Área de Atendimento:</strong> Belo Horizonte e Região Metropolitana</p>
            <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Telefone:</strong> (31) 99535-2139</p>
            <p style="margin: 0; font-size: 14px;"><strong>Email:</strong> contato@climatbh.com.br</p>
          </div>
        `,
      });

      // Abrir info window ao clicar no marcador
      const marker = new window.google.maps.Marker({
        position: beloHorizonte,
        map: map,
        title: 'ClimatBH',
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    };

    loadGoogleMaps();
  }, []);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}


