import React from "react";

import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/56807558?s=460&v=4"
          alt="Antonio Decanini"
        />
        <div>
          <strong>Antonio Decanini</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        <br /> <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        possimus odit vero magnam mollitia tempore ducimus totam placeat porro
        cum, eligendi, perspiciatis excepturi iusto ipsam quasi similique iure,
        ratione pariatur!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 30,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
