import React, { Component } from 'react';
import eLeve from '../../images/app.png'

class Introducao extends Component {
    render() {
        return (
            <section className="container" style={{marginBottom:"8%", marginTop:"8%"}}>
                    <div className="row align-items-center text-left">
                        <div className="col-sm animated fadeInLeft">
                            <h2 style={{fontSize:"2.5rem"}}>Ser responsável ambiental é divertido e pode gerar recompensas!</h2>
                            <p>O aplicativo e-Leve conecta você a pontos de coleta especializados para que possa realizar o descarte correto de lixos eletrônicos. Seja um doador de lixo, acumule pontos e troque por descontos em diferentes estabelecimentos e serviços.</p>
                        </div>
                        <div className="col-sm">
                           <img className="img-fluid" src={eLeve} />
                        </div>
                    </div>
            </section>
        )
    }
}

export default Introducao;