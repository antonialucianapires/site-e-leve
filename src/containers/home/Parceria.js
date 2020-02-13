import React, { Component } from 'react';
import Formulario from '../../components/FormParceria/FormP';
import ParceriaImg from '../../images/parceria.png'

class Parceria extends Component {
    render() {
        return <section className="container-fluid" style={{ backgroundColor: "#B2DFDB", padding:"7% 2%" }}>
           <section className="container">
            <div className="row align-items-center">
                <div className="col-sm mr-5">
                   <img className="img-fluid" src={ParceriaImg} />
                </div>
                <div className="col-sm">
                <h2>Seja parceiro(a)</h2>
                    <p>Se você é uma empresa de sustentabilidade, ou que possui um setor de responsabilidade socioambiental, ponto de coleta de lixo e Órgão público interessado, nós temos uma grande oportunidade para trabalharmos juntos!</p>
                    <Formulario />
                </div>
            </div>
            </section>
        </section>
    }
}

export default Parceria;