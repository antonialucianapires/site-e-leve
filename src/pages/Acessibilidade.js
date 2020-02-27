import React, { Component } from 'react';
import Pessoas from '../images/pessoas.jpg'

class Acessibilidade extends Component {
    render() {
        return (
            <section className="container text-left pt-5 pb-5">
                <p className="mb-0 pb-0">Declaração de acessibilidade</p>
                <p className="mb-0 pb-0">Declaração de Acessibilidade da e-Leve.</p>
                <p>Atualizado em: fevereiro de 2020.</p>

                <h4 className="pt-4"><strong>Geral</strong></h4>
                <p>A e-Leve se esforça para garantir que seus serviços sejam acessíveis a pessoas com deficiência. A e-Leve investiu uma quantidade significativa de recursos para ajudar a garantir que seu site seja mais fácil de usar e mais acessível para pessoas com deficiências, com a forte crença de que todas as pessoas têm o direito de viver com dignidade, igualdade, conforto e independência.</p>
                
                <h4><strong>Acessibilidade no e-leve-new.netlify.com</strong></h4>
                <p>A e-Leve disponibiliza o Widget de Acessibilidade do Site UserWay que é desenvolvido pela um servidor de acessibilidade dedicado. O software permite que a e-Leve melhore sua conformidade com as Diretrizes de Acessibilidade ao Conteúdo da Web (WCAG 2.0).</p>

                <h4><strong>Ativando o menu de acessibilidade</strong></h4>
                <p>O menu de acessibilidade da e-Leve pode ser ativado clicando no ícone do menu de acessibilidade que aparece no canto da página. Depois de ativar o menu de acessibilidade, aguarde um momento para que o menu de acessibilidade seja carregado em sua totalidade.</p>
            
                <h4><strong>Aviso de isenção</strong></h4>
                <p>A e-Leve continua com seus esforços para melhorar constantemente a acessibilidade de seu site e serviços, na crença de que é nossa obrigação moral coletiva permitir um uso contínuo, acessível e livre para aqueles de nós com deficiências.</p>
                <p>Apesar de nossos esforços para tornar todas as páginas e conteúdos da e-Leve totalmente acessíveis, alguns conteúdos podem ainda não estar totalmente adaptados aos mais rígidos padrões de acessibilidade. Isso pode ser resultado de não ter encontrado ou identificado a solução tecnológica mais adequada.</p>

                <h4><strong>aqui para você</strong></h4>
                <p>Se você estiver tendo dificuldades com qualquer conteúdo na e-Leve ou precisar de assistência em qualquer parte do nosso site, entre em contato conosco durante o horário comercial, conforme detalhado abaixo, e teremos prazer em ajudá-lo.</p>
            
                <h4><strong>Entre em contato</strong></h4>
                <p>Se desejar relatar um problema de acessibilidade, tiver alguma dúvida ou precisar de ajuda, entre em contato com atendimento da e-Leve da seguinte forma:</p>
                <p>Email: <a href="mailto:e-leve.tecnologia@yandex.com">e-leve.tecnologia@yandex.com</a></p>
            
                <img className="img-fluid" src={Pessoas} alt="Roda de pessoas feitas de papel"/>
            </section>
        )
    }
}

export default Acessibilidade;