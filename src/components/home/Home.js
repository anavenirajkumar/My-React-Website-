import React from 'react';


import card1 from '../../assets/img/card_1.jpg';  //----------------------------------------
import card2 from '../../assets/img/card_2.jpg';
import card3 from '../../assets/img/card_3.jpg';
import card4 from '../../assets/img/card_4.jpg';

class Home extends React.Component {
    constructor(props){ //  Importtant-------------------
      super(props);
    }
    render(){
        return(
            <React.Fragment>
                <div className="landing-page">
                       <div className="wrapper">
                           <div className="d-flex flex-column justify-content-center text-center align-items-center h-100">
                            <h2 className="display-3">Welcome to React Routing</h2>
                            <p className="lead p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur culpa dolore dolorem ea eum facere maxime molestias placeat quasi ratione, vel? Alias dolor error, eum fugit ipsum iste laboriosam maxime perferendis placeat quae quis quod recusandae reiciendis temporibus, veniam.</p>
                                <div className="col-md-3">
                                    <a href="https://www.youtube.com/channel/UCU_gK1CvOR-HFB2ydk01QdA" target="_blank"><button className="btn btn-primary text-uppercase js-scroll-trigger " >Subscribe</button></a>                
                                </div>
                          </div>
                      </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3">
                               <div className="card">
                               <img src={card1} className="img-fluid" alt=""></img>
                                      <div className="card-body">
                                           <h4 className="card-body text-center">Effel Tower</h4>
                                      </div>
                               </div>
                        </div>
                        <div className="col-md-3">
                               <div className="card">
                               <img src={card2} className="img-fluid" alt=""></img>
                                      <div className="card-body">
                                           <h4 className="card-body text-center">Japan</h4>
                                      </div>
                               </div>
                        </div>
                        <div className="col-md-3">
                               <div className="card">
                               <img src={card3} className="img-fluid" alt=""></img>
                                      <div className="card-body">
                                           <h4 className="card-body text-center">USA</h4>
                                      </div>
                               </div>
                        </div>
                        <div className="col-md-3">
                               <div className="card">
                               <img src={card4} className="img-fluid" alt=""></img>
                                      <div className="card-body">
                                           <h4 className="card-body text-center">Malaysia</h4>
                                      </div>
                               </div>
                        </div>
                    </div>
                    
                  </div>

      <section className="page-section  mt-4" id="team" >
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Countrys Tourism</h2>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img src={card1} className="img-fluid mx-auto rounded-circle" alt=""></img>
                            <h4>Effel Tower</h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                        <img src={card2} className="img-fluid mx-auto rounded-circle" alt=""></img>
                            <h4>Japan</h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                        <img src={card3} className="img-fluid mx-auto rounded-circle" alt=""></img>
                            <h4>U S A</h4>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

     <footer className="p-3 bg-dark text-white text-center">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-9">
                    <h3>Copyright © 2020 , AnaveniRajkumar</h3>
                    <h6>All Rights Reserved</h6>
                    <h6>Developed & Maintained by
                        <a className="text-warning" href="https://www.facebook.com/anavenirajkumarprince" target="_blank">
                            <i className="fa fa-users"></i> AnaveniRajkumar.
                        </a>
                    </h6>
                </div>
                <div className="col-md-3">
                    <a href="https://www.youtube.com/channel/UCU_gK1CvOR-HFB2ydk01QdA"><button className="btn btn-danger" >Subscribe</button></a>                
                </div>
            </div>
        </div>
    </footer>

            </React.Fragment>
        )
    }
}
export default Home;