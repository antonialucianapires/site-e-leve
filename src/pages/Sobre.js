import React, {Component} from 'react';
import Apresentacao from '../containers/Sobre/Apresentacao'
import Solucao from '../containers/Sobre/Solucao'
import Processo from '../components/Processo/Processo'
import Impacto from '../containers/Sobre/Impacto'
import Devs from '../containers/Sobre/Devs';

class Sobre extends Component {
    render() {
        return (
            <section className="container-fluid p-0">
                <Apresentacao />
                <Solucao />
                <Processo />
                <Impacto />
                <Devs />
            </section>
        )
    }
}

export default Sobre;