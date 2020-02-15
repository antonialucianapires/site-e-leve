import React, {Component} from 'react';
import '../../App.css'
import Lixeira from '../../images/lixeira.png'

class Apresentacao extends Component {
    render() {
        return (
            <section className="container-fluid text-left" style={{backgroundColor:"#009688", paddingTop:"4%", paddingBottom:"8%", color: "#fff"}}>
            <section className="container">
                <div className="row align-items-end">
                        <div className="d-inline-flex p-2 bd-highlight mx-auto d-block pb-1">
                        <img className="img-fluid" src={Lixeira} alt="Lixeira com lixo eletrônico." />
                        </div>
                        <div className="col-sm">
                          <h1 className="display-5">O Lixo Eletrônico no Brasil</h1>
                          <p style={{fontSize:"1.2em"}}>Com o avanço da tecnologia houve um aumento considerável no consumo de equipamentos eletrônicos gerando um acúmulo de lixo eletrônico. Segundo relatório do Programa das Nações Unidas pelo Meio Ambiente - PNUMA - sobre lixo eletrônico, <strong>o Brasil é o país da América Latina que mais gera lixo eletrônico: foram 1,4 milhões de toneladas por ano (7 quilos por pessoa)</strong>.</p>
                        </div>
                    </div>
                    </section>
            </section>
        )
    }
};

export default Apresentacao;