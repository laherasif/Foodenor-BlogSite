import React from 'react';
import './blog.css'
import { Link } from 'gatsby'
export default function Blog() {
    return (
        <div>
            <div className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="title">
                                <h2>Blogs</h2>

                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className="blog-section-image">
                                    <img src="images/food.jpg" alt="lunch" className="river" />
                                    <Link to="/title"> <img src="images/FoodieNor logo design .png" className="logo" alt="food_logo" /></Link>

                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">

                                <div className="section-filter">
                                    <form>
                                        <div className="form-group has-search">
                                            <span className="fa fa-search form-control-feedback" ></span>
                                            <input type="text" className="form-control" placeholder="Search" />
                                        </div>
                                    </form>

                                    <div className="form-group has-search">
                                        <span className="fa fa-filter form-control-feedback" ></span>
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                    <div className="textfield">

                                        <textarea className="form-control" cols="10" rows="10"  ></textarea>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section>
                        <div className="food-cards">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="images/fastfood.jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                Lorem ispurm
                                                <br></br>
                                                Heading
                                                </h3>
                                            <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>
                                        </div>
                                        <div className="card-btn">
                                            <ul>
                                                <li>
                                                    <span className="pizza">
                                                        pizza
                                                       <i className="fa fa-close"></i>
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        burger
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        noodles
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        pasta
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                            </ul>

                                        </div>
                                        <div className="card-footer">
                                            <div className="date">
                                                <p>01 May 2021</p>

                                            </div>
                                            <div className="stars" >
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="images/fastfood.jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                Lorem ispurm
                                                <br></br>
                                                Heading
                                                </h3>
                                            <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>
                                        </div>
                                        <div className="card-btn">
                                            <ul>
                                                <li>
                                                    <span className="pizza">
                                                        pizza
                                                       <i className="fa fa-close"></i>
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        burger
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        noodles
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        pasta
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                            </ul>

                                        </div>
                                        <div className="card-footer">
                                            <div className="date">
                                                <p>01 May 2021</p>

                                            </div>
                                            <div className="stars" >
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="images/fastfood.jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                Lorem ispurm
                                                <br></br>
                                                Heading
                                                </h3>
                                            <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>

                                        </div>
                                        <div className="card-btn">
                                            <ul>
                                                <li>
                                                    <span className="pizza">
                                                        pizza
                                                       <i className="fa fa-close"></i>
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        burger
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        noodles
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        pasta
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                            </ul>

                                        </div>
                                        <div className="card-footer">
                                            <div className="date">
                                                <p>01 May 2021</p>

                                            </div>
                                            <div className="stars" >
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="food-cards">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="images/fastfood.jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                Lorem ispurm
                                                <br></br>
                                                Heading
                                                </h3>
                                            <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>
                                        </div>
                                        <div className="card-btn">
                                            <ul>
                                                <li>
                                                    <span className="pizza">
                                                        pizza
                                                       <i className="fa fa-close"></i>
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        burger
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        noodles
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        pasta
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                            </ul>

                                        </div>
                                        <div className="card-footer">
                                            <div className="date">
                                                <p>01 May 2021</p>

                                            </div>
                                            <div className="stars" >
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="images/fastfood.jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                Lorem ispurm
                                                <br></br>
                                                Heading
                                                </h3>
                                            <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>
                                        </div>
                                        <div className="card-btn">
                                            <ul>
                                                <li>
                                                    <span className="pizza">
                                                        pizza
                                                       <i className="fa fa-close"></i>
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        burger
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        noodles
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        pasta
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                            </ul>

                                        </div>
                                        <div className="card-footer">
                                            <div className="date">
                                                <p>01 May 2021</p>

                                            </div>
                                            <div className="stars" >
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img className="card-img-top" src="images/fastfood.jpg" alt="Card cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                Lorem ispurm
                                                <br></br>
                                                Heading
                                                </h3>
                                            <p className="card-text">Loram ispum is a paragraph which is used for dummy text purpose.</p>

                                        </div>
                                        <div className="card-btn">
                                            <ul>
                                                <li>
                                                    <span className="pizza">
                                                        pizza
                                                       <i className="fa fa-close"></i>
                                                    </span>

                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        burger
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        noodles
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="pizza">
                                                        pasta
                                                           <i className="fa fa-close"></i>
                                                    </span>
                                                </li>
                                            </ul>

                                        </div>
                                        <div className="card-footer">
                                            <div className="date">
                                                <p>01 May 2021</p>

                                            </div>
                                            <div className="stars" >
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}