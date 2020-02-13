import React, {Component} from 'react';
import Introducao from '../containers/home/Introducao';
import Passos from '../containers/home/Passos';
import Parceiros from '../containers/home/Parceiros';
import Parceria from '../containers/home/Parceria';

class Inicio extends Component {
    render() {
        return (
        <section>
            <Introducao />
            <Passos />
            <Parceiros />
            <Parceria />
            </section>
        )
    }
}

export default Inicio;