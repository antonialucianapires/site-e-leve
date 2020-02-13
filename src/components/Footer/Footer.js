import React from 'react';
import Logo from '../../images/logo.png'

const Footer = () => {
    return (
        <section className="container-fluid p-0 " style={{ backgroundColor: "#009688", color: "#fff" }}>
            <footer class="page-footer font-small indigo">
                <div class="container">
                    <div class="row text-center d-flex justify-content-center pt-5 mb-3">
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold">
                                <a href="#!" style={{color:"#fff"}}>Sobre</a>
                            </h6>
                        </div>
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold">
                                <a href="#!"  style={{color:"#fff"}}>Blog</a>
                            </h6>
                        </div>
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold">
                                <a href="#!"  style={{color:"#fff"}}>Parceria</a>
                            </h6>
                        </div>
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold">
                                <a href="#!"  style={{color:"#fff"}}>Contato</a>
                            </h6>
                        </div>
                    </div>
                    <hr class="rgba-white-light" style={{margin:"0 15%" }}/>
                    <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
                        <div class="col-md-8 col-12 mt-5">
                        <img className="img-fluid pb-4" src={Logo}/>
                            <p style={{lineHeight:"1.7rem"}}>Nosso objetivo é utilizar a tecnologia para gerar impacto social e ambiental. Somos referência de empresa sustentável e educativa. Acompanhe nossas redes sociais e conheça de perto o nosso trabalho.</p>
                        </div>
                    </div>
                    <hr class="clearfix d-md-none rgba-white-light" style={{margin:"10% 15% 5%"}} />
                    <div class="row pb-3">
                        <div class="col-md-12">
                            <div class="mb-5 flex-center">
                                <a class="fb-ic">
                                    <i class="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                                </a>
                                <a class="gplus-ic">
                                    <i class="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
                                </a>
                                <a class="ins-ic">
                                    <i class="fab fa-instagram fa-lg white-text mr-4"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright text-center py-3">e-Leve © 2020 Copyright - Todos os direitos reservados
  </div>
  </div>
</footer>
        </section>
            )
        
        }
        
        export default Footer;
