import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Baixar from '../../images/down-arrow.svg';
import Localiza from '../../images/pin.svg';
import Estrela from '../../images/star.svg';
import Desconto from '../../images/transaction.svg';
import Envio from '../../images/truck.svg';
import Impacto from '../../images/reader.svg'

class Passos extends Component {
    render() {
        return (
            <section className="container" style={{marginBottom:"8%"}}>
                <div className="card-columns">
                <Card imagem={Baixar} titulo="Baixe o App" descricao="Para começar sua jornada de colaborador e beneficiário, baixe o nosso aplicativo. Comece agora!"/>
                <Card imagem={Localiza} titulo="Ponto de Coleta" descricao="Com o aplicativo e-Leve, localize os pontos de coleta mais próximos para realizar o seu descarte seguro."/>
                <Card imagem={Estrela} titulo="Pontuação" descricao="No ato da coleta, no aplicativo e-Leve, registre o descarte e transforme o seu lixo em pontos!"/>
                </div>
                <div className="card-columns">
                <Card imagem={Desconto} titulo="Desconto" descricao="Após a validação, os pontos poderão ser utilizados como desconto em estabelecimentos parceiros."/>
                <Card imagem={Envio} titulo="Envio" descricao="O ponto de coleta separa 2% do que foi coletado para entregar às oficinas de remontagem."/>
                <Card imagem={Impacto} titulo="Impacto" descricao="Pronto! Você contribuiu para salvar o meio ambiente e impactar na educação de jovens e adultos."/>
                </div>
            </section>
                )
            }
        }
        
export default Passos;