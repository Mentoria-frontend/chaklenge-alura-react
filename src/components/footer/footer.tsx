import React from 'react';
import Button from '../button/button';

const Footer: React.FC = () => {
  const enviar = () => {
    
  }
  return (
    <>
      <div className="logo">
        <img src="../src/assets/logo/logo.png" alt="Logo da AluraGeek" />
      </div>
      <div className="menu">
        <nav>
          <ul>
            <li>Quem somos nós</li>
            <li>Politica de privacidade</li>
            <li>Programa fidelidade</li>
            <li>Nossas lojas</li>
            <li>Quero ser franqueado</li>
            <li>Anuncie Aqui</li>
          </ul>
        </nav>
      </div>
      <div className="formulario">
        <h2 className="formulario_titulo">Fale conosco</h2>
        <form>
          <div>
            <label className="formulario_label" htmlFor="nome">Nome</label>
            <input className="formulario_imput" type="text" name="nome" placeholder="Seu nome"/>
          </div>
          <div>
            <label className="formulario_label" htmlFor="mensagem">Escreva sua mensagem</label>
            <textarea className="formulario_textarea" name="mensagem" rows={5} />
          </div>
          <button className="fotmulario_button" type="submit">Enviar mensagem</button>
          <Button label='Enviar mensagem' onClick={enviar()}/>
        </form>
      </div>
      <div className="assinatura">
        <p>Desenvolvido por Laércio Fernandes</p>
        <p>2023</p>
      </div>
    </>
  );
};

export default Footer;
