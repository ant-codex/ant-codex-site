'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for default marker icon in Leaflet + Next.js
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom Brand Neon Circle Icon
const brandIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #c8ff00; width: 24px; height: 24px; border-radius: 50%; border: 4px solid black; box-shadow: 0 0 15px rgba(200,255,0,0.6);"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

export default function Map() {
  const position: [number, number] = [51.5123, -0.1332]; // Soho, London

  return (
    <div className="w-full h-full min-h-[400px] grayscale contrast-[1.2] brightness-[0.7] invert-[0.1]">
      <MapContainer 
        center={position} 
        zoom={14} 
        scrollWheelZoom={false} 
        className="w-full h-full rounded-[2rem] overflow-hidden border border-white/10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position} icon={brandIcon}>
          <Popup className="custom-popup">
            <div className="p-2 font-bold text-black uppercase tracking-widest text-[10px]">
              ANT-CODEX STUDIO <br />
              <span className="font-normal opacity-60">SOHO, LONDON</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      <style jsx global>{`
        .leaflet-container {
          background: #000 !important;
        }
        .leaflet-right .leaflet-control-attribution {
          background: rgba(0,0,0,0.5) !important;
          color: rgba(255,255,255,0.3) !important;
          font-size: 8px !important;
        }
        .leaflet-control-zoom {
          border: 1px solid rgba(255,255,255,0.1) !important;
          border-radius: 12px !important;
          overflow: hidden !important;
        }
        .leaflet-control-zoom-in, .leaflet-control-zoom-out {
          background: #111 !important;
          color: #fff !important;
          border: none !important;
        }
        .leaflet-control-zoom-in:hover, .leaflet-control-zoom-out:hover {
          background: #c8ff00 !important;
          color: #000 !important;
        }
        .leaflet-popup-content-wrapper {
          background: #c8ff00 !important;
          color: #000 !important;
          border-radius: 8px !important;
        }
        .leaflet-popup-tip {
          background: #c8ff00 !important;
        }
      `}</style>
    </div>
  );
}
