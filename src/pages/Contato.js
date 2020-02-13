import React, {Component} from 'react';
import Formulario from '../components/FormContato/Formulario';
import Parceria from '../containers/home/Parceria';

class Contato extends Component {
    render() {
        return (
        <section className="container-fluid p-0">
            <section className="container" style={{padding:"7% 2%" }}>
                <h3>Como podemos te ajudar? Entre em contato.</h3>
                <p className="lead text-muted">Preencha o formulário para que possamos entrar em contato com você!</p>
                <Formulario />
            </section>
            <Parceria />
        </section>
        )
    }
}

export default Contato;