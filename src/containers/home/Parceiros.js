import React, {Component} from 'react';
import Logos from '../../images/parceiros.png'

class Parceiros extends Component {
    render() {
        return <section className="container" style={{marginBottom:"8%"}}>
            <img className="img-fluid" src={Logos} alt="Logotipos de parceiros" />
        </section>
    }
}

export default Parceiros;