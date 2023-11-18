import './style.css';
import { Header } from '../../components/Header';
import { RoomsList } from '../../components/RoomsList';
import { RoomOrder } from '../../components/RoomOrder';
import { Contact } from '../../components/Contact';
import { useState } from'react';

export const HomePage = () => {
  const [selectedRoom, setSelectedRoom] = useState({});
  
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  return (
    <>
      <Header />
      <RoomsList handleRoomSelect={handleRoomSelect} />
      <RoomOrder selectedRoom={selectedRoom} />
      <Contact />
    </>
  );
};
