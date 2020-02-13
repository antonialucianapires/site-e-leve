import React, { Component } from 'react';
import Ciclo from '../../images/processo.png'

class Processo extends Component {
    render() {
        return (
            <section className="container-fluid">
                <section className="container">
                    <section className="row align-items-center">
                        <div class="col-sm pb-5">
                            <img className="img-fluid rounded float-left" src={Ciclo} />
                        </div>
                        <div class="col-sm text-rigth">
                            <h2 style={{fontSize:"3em"}}>Conversão e Impacto</h2>
                        </div>
                    </section>
                </section>
            </section>
        )
    }
}

export default Processo;