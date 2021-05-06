import React from 'react';
import './blog.css'
export default function Blog() {
    return (
        <div>
            <div className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="title">
                                <h2>Blog</h2>
                                <p >
                                    Lorem is a paragraph</p>
                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="blog-section-image">
                                    <img src="images/food.jpg" alt="lunch" className="river" />
                                    <img src="images/FoodieNor logo design .png" className="logo" alt="food_logo" />

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="section-filter">
                                    <div className="form-group has-search">
                                        <span className="fa fa-search form-control-feedback" ></span>
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                    <div className="form-group has-search">
                                        <span className="fa fa-search form-control-feedback" ></span>
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
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
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
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
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
                                          <div className="card-btn">
                                              <ul>
                                                  <li>
                                                  <button className="btn">pizza<i class="fa fa-close"></i></button>
                                                  </li>
                                                  <li>
                                                  <button className="btn">pizza<i class="fa fa-close"></i></button>
                                                  </li>
                                                  <li>
                                                  <button className="btn">pizza<i class="fa fa-close"></i></button>
                                                  </li>
                                                  <li>
                                                  <button className="btn">pizza<i class="fa fa-close"></i></button>
                                                  </li>
                                              </ul>
                                         
                                          </div>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
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