import React, {Component} from 'react';

class Formulario extends Component {
    render() {
        return <section>
            <form action="/action_page.php">
  <div class="form-group">
      <input type="email" class="form-control" id="email" placeholder="Digite seu nome" name="email"  />
    </div>
    <div class="form-group">
      <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" name="email" />
    </div>
    <div class="form-group">
  <select class="form-control" id="sel1">
    <option>Selecione sua área</option>
    <option>Ponto de Coleta</option>
    <option>Estabelecimento/Serviço</option>
    <option>ONG/Órgão Público/Outros</option>
  </select>
    </div>
    <button type="submit" class="btn btn-block" style={{backgroundColor:"#009688", color:"#fff"}}>Enviar</button>
  </form>
        </section>
    }
}

export default Formulario;