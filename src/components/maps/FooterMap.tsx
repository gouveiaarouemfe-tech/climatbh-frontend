/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

'use client';

import { useEffect, useRef } from 'react';



export default function FooterMap() {
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
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgaN2KKlqZg&libraries=places&callback=initFooterMap`;
      script.async = true;
      script.defer = true;
      
      // Definir callback global
      (window as any).initFooterMap = initMap;
      
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (!mapRef.current) return;

      // Coordenadas do centro de Belo Horizonte
      const beloHorizonte = { lat: -19.9167, lng: -43.9345 };

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 10,
        center: beloHorizonte,
        styles: [
          {
            featureType: 'all',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [{ color: '#e5e7eb' }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f3f4f6' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#3b82f6' }]
          }
        ],
        disableDefaultUI: true,
        gestureHandling: 'none',
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        draggable: false,
      });

      // Adicionar marcador simples no centro de BH
      new window.google.maps.Marker({
        position: beloHorizonte,
        map: map,
        title: 'ClimatBH - Belo Horizonte',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#2563eb" stroke="white" stroke-width="2"/>
              <circle cx="12" cy="12" r="4" fill="white"/>
            </svg>
          `),
              scaledSize: new window.google.maps.Size(24, 24),
          anchor: new window.google.maps.Point(12, 12),
        },
      });

      // Adicionar círculo para mostrar área de atendimento
      new window.google.maps.Circle({
        strokeColor: '#2563eb',
        strokeOpacity: 0.6,
        strokeWeight: 1,
        fillColor: '#2563eb',
        fillOpacity: 0.1,
        map: map,
        center: beloHorizonte,
        radius: 30000, // 30km de raio
      });
    };

    loadGoogleMaps();
  }, []);

  return (
    <div className="w-full h-32 rounded-lg overflow-hidden">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}


