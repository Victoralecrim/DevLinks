import { useState } from 'react';
import "./admin.css";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";

import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export default function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");
  const [textColorInput, setTextColorInput] = useState("red");

  return (
    <div className="admin-container">
      <Header />

      <Logo />

      <form action="" className="form">
        <Input
          placeholder="nome do link..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="label">Url do link</label>

        <Input
          type="url"
          placeholder="Digite a url..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="container-colors">
          <div>
            <label className="label right">Cor do link</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>
          <div>
            <label className="label right">Fundo de link</label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
        </section>


        <div className="preview">
            <label className="label">
                Veja como esta ficando 👇
                <article className="list" style={{marginTop: "8", bacgroundColor: backgroundColorInput}}>
                 <p style={{color: textColorInput}} >{nameInput}</p>
                </article>
            </label>
        </div>

        <button className="btn-register" type="submit">
          Cadastrar <MdAddLink size={24} color="#FFF" />
        </button>
      </form>

      <h2 className="title">MeusLinks</h2>

      <article
        className="list animate-pop"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <p>Grupo exclusivo no telegram</p>
        <div>
          <button className="btn-delete">
            <FiTrash2 size={18} color="#FFF" />
          </button>
        </div>
      </article>
    </div>
  );
}
