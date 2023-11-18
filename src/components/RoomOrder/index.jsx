import { RoomDetail } from '../RoomDetail';
import { OrderForm } from '../OrderForm';


export const RoomOrder = ({ selectedRoom }) => {
  return (
    <section className="light">
      <div className="container">
      <h2>Pokoj {selectedRoom.name}, {selectedRoom.price} Kč na osobu na noc</h2>
        <div className="columns-2">
        
            <RoomDetail selectedRoom={selectedRoom} />
          
          <OrderForm selectedRoom={selectedRoom} />
        </div>
      </div>
    </section>
  );
};
