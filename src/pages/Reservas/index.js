import React from 'react';
import { MdDelete } from 'react-icons/md';

import './style.css';

function Reservas() {
  return(
    <div>
      <h1 className="title">Você soliticou 1 reservas</h1>
      <div className="reservas">
        <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="Maceió" />
        <strong>Viagem Maceió 7 Dias</strong>
        <span>Quantidade: 2</span>
        <button type="button" onClick={() => {}}>
          <MdDelete size={20} color="#A7A7A7" />
        </button>
      </div>
      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  )
}

export default Reservas;