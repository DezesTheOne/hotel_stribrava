import React, { useState, useEffect } from 'react';
import { Modal } from '@geist-ui/core';
import dayjs, { Dayjs } from 'dayjs';

export const OrderForm = ({ selectedRoom }) => {
  const [roomPrice, setRoomPrice] = useState(Number(selectedRoom.price));
  const [night, setNight] = useState(1);
  const [personCount, setPersonCount] = useState(1);
  const [dateFrom, setDateFrom] = useState(dayjs().format('YYYY-MM-DD'));
  const [dateTo, setDateTo] = useState(dayjs().format('YYYY-MM-DD'));
  const [pet, setPet] = useState(false);
  const [child, setChild] = useState(false);
  const [breakfest, setBreakfest] = useState(false);
  const [halfBoard, setHalfBoard] = useState(false);
  const [fullBoard, setFullBoard] = useState(false);
  const [state, setState] = useState(false);

  const nightCount = dayjs(dateTo).diff(dayjs(dateFrom), 'day');

  const totalPriceCompute = (
    personCount,
    nightCount,
    pet,
    child,
    breakfest,
    halfBoard,
    fullBoard,
  ) => {
    let totalPrice = nightCount * selectedRoom.price * personCount;

    if (breakfest) {
      totalPrice += 250 * nightCount * personCount;
    } else if (halfBoard) {
      totalPrice += 500 * nightCount * personCount;
    } else if (fullBoard) {
      totalPrice += 750 * nightCount * personCount;
    }
    if (pet) {
      totalPrice += roomPrice / 4;
    }
    if (child) {
      totalPrice += roomPrice / 2;
    }
    return totalPrice;
  };

console.log(personCount,
  nightCount,
  roomPrice,
  pet,
  child,
  breakfest,
  halfBoard,
  fullBoard,)

  const handler = () => setState(true);
  const closeHandler = (event) => {
    setState(false);
    console.log('closed');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields">
        <label htmlFor="field1" className="field-label">
          Od:
        </label>
        <input
          id="field1"
          className="field-input"
          type="date"
          value={dateFrom}
          onChange={(event) => {
            setDateFrom(event.target.value);
          }}
        />

        <label htmlFor="field2" className="field-label">
          Do:
        </label>
        <input
          id="field2"
          className="field-input"
          type="date"
          value={dateTo}
          onChange={(event) => {
            setDateTo(event.target.value),
              console.log(event.target.value);
          }}
        />

        <label htmlFor="field3" className="field-label">
          Počet osob:
        </label>
        <input
          id="field3"
          className="field-input"
          type="text"
          value={personCount}
          onChange={(event) => {
            setPersonCount(event.target.value);
          }}
        />

        <label htmlFor="select" className="field-label">
          Stravování:
        </label>
        <select id="select" className="field-input">
          <option>Žádné</option>
          <option
            value={breakfest}
            onChange={() => {
              setBreakfest(!breakfest);
            }}
          >
            Snídaně
          </option>
          <option
            value={halfBoard}
            onChange={() => {
              setHalfBoard(!halfBoard);
            }}
          >
            Polopenze
          </option>
          <option
            value={fullBoard}
            onChange={() => {
              setFullBoard(!fullBoard);
            }}
          >
            Plná penze
          </option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          id="check1"
          className="field-input"
          type="checkbox"
          checked={pet}
          onChange={() => {
            setPet(!pet);
          }}
        />
        <label htmlFor="check2" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          id="check2"
          className="field-input"
          type="checkbox"
          checked={child}
          onChange={() => {
            setChild(!child);
          }}
        />
        <label htmlFor="check3" className="field-label">
          Bezbariérový přístup:
        </label>

        <input id="check3" className="field-input" type="checkbox" />
        <label htmlFor="field4" className="field-label">
          E-mail:
        </label>

        <input id="field4" className="field-input" type="email" />
        <label htmlFor="field5" className="field-label">
          Telefon:
        </label>
        <input id="field5" className="field-input" type="number" />
      </div>

      <div>
        <p className="celkovaCena">
          Celková cena za pobyt:{' '}
          {totalPriceCompute(
            personCount,
            nightCount,
            roomPrice,
            pet,
            child,
            breakfest,
            halfBoard,
            fullBoard,
          )}{' '}
          Kč
        </p>
        <button className="wide" onClick={handler}>
          Odeslat poptávku
        </button>
        <Modal visible={state} onClose={closeHandler}>
          <Modal.Title>Objednávka odeslána</Modal.Title>
          <Modal.Content>
            <p>Naše Andulka se Vám brzy ozve a potvrdí rezervaci.</p>
          </Modal.Content>
          <Modal.Action passive onClick={() => setState(false)}>
            Děkuji
          </Modal.Action>
        </Modal>
      </div>
    </form>
  );
};
