import React from "react"
import 'fontawesome-4.7'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { Link } from 'gatsby'
export default function Home() {
  return (
    <div>
      <div className="food">
        <div className="container">

          <section>
            <div className="section-heading">

              <div className="row">
                <div className="col-md-3">
                  <div className="heading">
                    <p>
                      Sub Title
                          </p>
                    <h2>Heading</h2>
                    <p className="loram">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>

                    <button className="button  arrow">Explore</button>

                  </div>
                </div>
                <div className="col-md-7">
                  <div className="heading-logo">
                    <img src="images/FoodieNor logo design .png" alt="food_logo" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="heading-buttons">
                    <ul>
                      <li><button type="button" className="btn btn-outline-primary">About</button></li>
                      <li><button type="button" className="btn btn-outline-primary">Contribute</button></li>
                      <li><button type="button" className="btn btn-outline-primary">Contact</button></li>
                    </ul>
                  </div>
                </div>
              </div>


            </div>
          </section>

          <section>
            <div className="section-discover">
              <div className="row">
                <div className="col-md-3">
                  <div className="discover">
                    <h1>
                      Discover
                      FoodieNor
                        </h1>
                    <div className="discovers-card">
                      <ul>
                        <li >Appolizer</li>
                        <li >Main Dishes</li>
                        <li style={{borderBottom:'none' , color:'#154200'}}>Sweet Deesert</li>
                      </ul>
                    </div>


                  </div>
                </div>
                <div className="col-md-5">
                  <div className="dicover-imagecard card">
                    <img className="card-img-top" alt="logo-card" src="http://placeimg.com/640/480/nature" />
                    <div className="card-body">
                      <div className="title" >
                        <h5 className="card-title ">Blog Heading</h5>
                        <div className="stars " >
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </div>
                      </div>

                      <p className="card-text"> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                       <div className="explore-more">
                         <button><i className="fa fa-long-arrow-right"></i></button>
                         <p>Explore More</p>
                       </div>
                    
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div id="reviews">
                    <div >
                      <h2>Reviews</h2>
                      <ul id="review-card">
                        <li>
                          <div className="review-data">
                            <div className="title">
                              <h4>Fedore</h4>
                              <p>hellow this is</p>
                            </div>
                            <div className="title-star">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>

                            </div>

                          </div>

                        </li>
                        <div className="review-left">
                          <div className="para">
                            <p>J</p>

                          </div>
                        </div>
                        <li>
                          <div className="review-data">
                            <div className="title">
                              <h4>Fedore</h4>
                              <p>hellow this is</p>
                            </div>
                            <div className="title-star">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>

                            </div>

                          </div>
                        </li>
                        <div id="review-Don">
                          <div className="para">
                            <p>J</p>

                          </div>
                        </div>
                        <li>
                          <div className="review-data">
                            <div className="title">
                              <h4>Fedore</h4>
                              <p>hellow this is</p>
                            </div>
                            <div className="title-star">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>

                            </div>
                            <div id="review-Go">
                          <div className="para">
                            <p>J</p>

                          </div>
                        </div>

                          </div>
                          
                        </li>
                        
                      </ul>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>


        </div>


        <footer id="footer" >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-7">
                <div className="footer__about">
                  <div className="footer__logo" style={{ display: 'flex' }}>
                    <img src="images/FoodieNor logo design .png" alt="food_logo" />
                    <h6 >FOOFIENOR </h6>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>


                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-5">
                <div className="footer__widget">
                  <h6>CATAGORIES</h6>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Blogs</Link></li>
                    <li><Link to="/">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="footer__widget">
                  <h6>Tags Used</h6>
                  <ul>
                    <li><Link to="/">My Account</Link></li>
                    <li><Link to="/">Orders Tracking</Link></li>
                    <li><Link to="/">Checkout</Link></li>
                    <li><Link to="/">Wishlist</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-8 col-sm-8">
                <div id="footer__newslatter">
                  <h6>NEWSLETTER</h6>
                  <form >
                    <input type="text" placeholder="Email Us" />
                    <button className="site-btn"><i className="fa fa-long-arrow-right"></i></button>
                  </form>
                  <div id="footer__social">
                    <Link to="/" className="links"><i className="fa fa-linkedin" /></Link>
                    <Link to="/" className="links"><i className="fa fa-twitter" /></Link>
                    <Link to="/" className="links"><i className="fa fa-behance" /></Link>
                    <Link to="/" className="links"><i className="fa fa-instagram" /></Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </footer>
      </div>




    </div>
  )
}


