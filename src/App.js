import React, { useState } from 'react';
import './app.css';

export default function App() {

  const [info, setInfo] = useState({})
  const [input, setInput] = useState('')
  const pesquisa = () => {
    const api = 'https://hn.algolia.com/api/v1/search?query'
    fetch(`${api}=${input}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response)
      })
  }
  const checkar = (livro) => {
    if (livro === null || livro === '') {
      return livro = "Não informado"
    } else {
      return livro
    }
  }
  const title = process.env.REACT_APP_TITLE;
  const footer = process.env.REACT_APP_FOOTER;

  return (
    <div className='List'>
      <header className="Header">{title}</header>
      <div id="divBusca">
        <input id="txtBusca" type="text" placeholder="🔍 Buscar..." onChange={(input) => { setInput(input.target.value) }}></input>
        <button id="btnBusca" type="submit" onClick={pesquisa}> Buscar </button>
      </div>
      <div className="List">
        {info.hits && (
          <ul>
            {info.hits.map((livro) => (
              <li className="Item" key={livro.objectID}>
                <h2> 📚 Title: {checkar(livro.title)}</h2>
                <h3> 👤 Author: {checkar(livro.author)} </h3>
                <span> 🔗 URL: </span>
              <a href="URL">{checkar(livro.url)}</a>
              </li>
            ))}
          </ul>
        )}</div>
      <footer className="Footer">{footer}</footer>
    </div>
  )
}