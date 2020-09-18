import React, { Component } from 'react';
import './App.css'

class App extends Component {
    constructor() {
      super();
      this.state = {
        name: 'React'
      };
    }
    
    carregarArquivo = () => {
      if (window.File && window.FileReader && window.FileList && window.Blob) {
           var preview = document.getElementById('mostrar-texto');
           var file = document.querySelector('input[type=file]').files[0];
           var reader = new FileReader()
  
           var textFile = /text.*/;
  
           if (file.type.match(textFile)) {
              reader.onload = function (event) {
                 preview.innerHTML = event.target.result;
              }
           } else {
              preview.innerHTML = "<span class='error'>Não é um arquivo de texto!</span>";
           }
           reader.readAsText(file);
  
     } else {
        alert("Erro ao carregar arquivo");
     }
    }
  
    render() {
      return (
        <div className="container">
            <div id="mostrar-texto">Escolha um arquivo de texto</div>
          <input className="button" type="file" onChange={this.carregarArquivo} />
        </div>
      );
    }
  }

export default App; 