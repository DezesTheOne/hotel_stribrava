import { Room } from '../Room';
import { useState, useEffect } from 'react';

export const RoomsList = ({ handleRoomSelect }) => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/pokoje');
      const data = await response.json();
      handleRoomSelect(data.result[0]);
      setRooms(data.result);
    };
    fetchRooms();
  }, []);

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          {rooms.map((room) => (
            <Room room={room} onRoomSelect={handleRoomSelect} />
          ))}
        </div>
      </div>
    </section>
  );
};
