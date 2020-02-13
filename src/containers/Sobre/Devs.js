import React, {Component} from 'react';
import Team from '../../components/TeamCard/Team'
import Aline from './Aline.png'
import Ana from './Ana.png'
import Antonia from './Antonia.png'
import Arthur from './Arthur.png'
import Diego from './Diego.png'
import Gabriel from './Gabriel.png'

class Devs extends Component {
    render() {
        return (
            <section className="container-fluid p-0" style={{backgroundColor:"#00796b", color:"#fff"}}>
                <section className="container" style={{padding:"8% 0"}}>
                    <section className="row">
                        <Team foto={Aline} nome="Aline Nascimento" funcao="Dev Back-end e Pesquisadora" github="https://github.com/aLinesantwos" linkedin="https://www.linkedin.com/in/aline-nascimento-b21b04191/" />
                        <Team foto={Ana} nome="Ana Beatriz" funcao="Dev Fullstack e Social Media" linkedin="https://www.linkedin.com/in/anabthomaz/" github="https://github.com/DevAnaBea" />
                        <Team foto={Antonia} nome="Antonia Luciana Pires" funcao="Designer e Dev Fullstack" github="https://www.linkedin.com/in/antonialucianapires" linkedin="https://www.linkedin.com/in/antonialucianapires/" />
                        <Team foto={Arthur} nome="Arthur Figueira" funcao="Dev Fullstack e Negócios" github="https://github.com/arthurfig" linkedin="https://www.linkedin.com/in/artfigueira/" />
                        <Team foto={Diego} nome="Diego Leandro" funcao="Dev Front-end e Testes" github="https://github.com/Diego-1998?tab=following" linkedin="https://www.linkedin.com/in/diego-leandro-a6b672181/" />
                        <Team foto={Gabriel} nome="Gabriel Mazala" funcao="Dev mobile e Social Media" github="https://github.com/mazalagabriel" linkedin="https://www.linkedin.com/in/gabriel-mazala-56974b189/" />
                    </section>
                </section>
            </section>
        )
    }
}

export default Devs;