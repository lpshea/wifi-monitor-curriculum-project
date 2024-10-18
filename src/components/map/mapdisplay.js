import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './mapdisplay.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import 'leaflet/dist/leaflet.css';

function MapDisplay() {

    return(<div style={{
        height: '70vh',
        width: '50%',
        marginBottom: '1rem',
        borderRadius: '20px',
        padding: '20px',
        backgroundColor: 'lightblue',
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderColor: '#25B4E7'
  
      }}>
        <MapContainer class="mapContainer" center={[37.8719, -122.2585]} zoom={17} scrollWheelZoom={true} style={{height: '100%', width: '100%'}} >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>);
}
export default MapDisplay;


