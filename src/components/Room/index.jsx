export const Room = ({ room, onRoomSelect }) => {
  return (
    <div className="card" onClick={() => onRoomSelect(room)}>
      <img className="card__image" src={`./img/pokoj0${room.id}.jpg`} />
      <div className="card__title">{room.name}</div>
      <div className="card__body">{room.price} Kč na osobu</div>
    </div>
  );
};
