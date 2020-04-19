import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import './style.css';
import { removeReserve } from '../../store/modules/reserve/actions';

function Reservas() {

  const reserves = useSelector(state => state.reserve);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(removeReserve(id))
  }

  return(
    <div>
      <h1 className="title">Você soliticou {reserves.length} reservas</h1>
      {reserves.map(reserve => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.amount}</span>
          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#A7A7A7" />
          </button>
        </div>
      ))}
      
      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  )
}

export default Reservas;