import './home.css'

import { Social } from '../../components/Social';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Home() {
    return (
        <div className="home-container">
            <h1>Victor Alecrim</h1>
            <span>Veja meus links 👇</span>

            <main className="links">
                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Canal no youtube</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p className="link-text">grupo privado no telegram</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Treinamento Fábrica de Aplicativos</p>
                    </a>
                </section>

                <footer>
                    <Social url="https://www.facebook.com/victorcarmo.alecrim ">
                        <FaFacebook size={35} color="#fff" />
                    </Social>
                    <Social url="https://youtube.com/c/sujeitoprogramador">
                        <FaYoutube size={35} color="#fff" />
                    </Social>
                    <Social url="https://instagram.com/sujeitoprogramador">
                        <FaInstagram size={35} color="#fff" />
                    </Social>
                </footer>

            </main>
        </div>
    );
}