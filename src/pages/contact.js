import React from 'react';
import './contact.css'
export default function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="contact-form">
                            <h2>Contact</h2>
                            <p className="loram">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                            </p>
                        </div>

                        <div className="container">
                            <div className="contect-form-data">

                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="form">
                                            <form>
                                                <div className="form-group row" >
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="" className="form-control" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group row" >
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="" className="form-control" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group row" >
                                                    <div className="col-md-6"></div>
                                                    <div className="col-md-6"></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-social">

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}