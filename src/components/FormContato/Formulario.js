import React, { Component } from 'react';

class Formulario extends Component {
    render() {
        return (
            <form className="form-row justify-content-center">
                <div className="form-group  col-md-9">
                    <input type="text" class="form-control" id="inputAddress" placeholder="Escreva seu nome" />
                </div>
                <div class="form-group col-md-5">
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-4">
                    <input type="text" class="form-control" id="inputTelefone" placeholder="Telefone" />
                </div>
                <div class="form-group col-md-9">
                    <textarea class="form-control" rows="5" id="comment" placeholder="Escreva sua mensagem"></textarea>
                </div>
                <div className="form-group col-md-9">
                    <input type="submit" class="btn w-100 btn-info" value="Enviar" />
                </div>
            </form>
        )
    }
}

export default Formulario;