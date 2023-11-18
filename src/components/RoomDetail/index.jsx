export const RoomDetail = ({selectedRoom}) => {
  return (
    <div className="column">
      
      <img src={`./img/pokoj0${selectedRoom.id}.jpg`} />
      <p>
        {selectedRoom.description}
      </p>
    </div>
  );
};
