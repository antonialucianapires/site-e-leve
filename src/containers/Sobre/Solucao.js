import React, {Component} from 'react';
import Ilustracao from '../../images/app-ilustracao.png'

class Solucao extends Component {
    render() {
        return (
            <section className="container-fluid text-left pt-5 pb-5">
            <section className="container">
                <div className="row align-items-center">
                        <div className="col-sm">
                          <h1 className="display-5">Nossa solução</h1>
                          <h4 className="pb-3" style={{fontSize:"1.2em", color:"#009688"}}><strong>Com o objetivo de contribuir para um mundo conectado e sustentável, criamos o e-Leve.</strong></h4>
                          <p className="lead">e-Leve é um aplicativo que facilita e incentiva o descarte correto de lixo eletrônico na cidade do Rio de Janeiro. Através dele é possível localizar pontos de coleta cadastrados e ganhar descontos com o descarte para que possam ser utilizados em estabelecimentos parceiros. </p>
                          <p className="lead">Nós, desenvolvedores desse projeto, acreditamos que, muito mais do que uma simples ferramenta, o e-Leve é um motor de transformação.</p>
                        </div>
                        <div className="d-inline-flex p-2 bd-highlight mx-auto d-block pb-1">
                        <img className="img-fluid" src={Ilustracao} />
                        </div>
                    </div>
                    </section>
            </section>
        )
    }
};

export default Solucao;