import React from 'react';
import { Link } from 'gatsby'
 import './footer.css'
export default function Footer() {
    return (
        <div>
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
                                    <li><Link to="/" className="bottom-links">Home</Link></li>
                                    <li><Link to="/" className="bottom-links">About</Link></li>
                                    <li><Link to="/" className="bottom-links">Blogs</Link></li>
                                    <li><Link to="/" className="bottom-links">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="footer__widget">
                                <h6>Tags Used</h6>
                                <ul>
                                    <li><Link to="/" className="bottom-links">My Account</Link></li>
                                    <li><Link to="/" className="bottom-links">Orders Tracking</Link></li>
                                    <li><Link to="/" className="bottom-links">Checkout</Link></li>
                                    <li><Link to="/" className="bottom-links">Wishlist</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-8">
                            <div id="footer__newslatter">
                                <h6>NEWSLETTER</h6>
                                <form  >
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
    )

}