import React from "react"
import 'fontawesome-4.7'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
export default function Home() {
  return (
    <div>
      <div className="food">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <section>
                <div className="section-heading">

                  <div className="row">
                    <div className="col-md-4">
                      <div className="heading">
                        <p>
                          Sub Title
                     <br></br>
                          <h2>Heading</h2>
                        </p>
                        <p className="loram">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>

                        <button className="button  arrow">Explore</button>

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="heading-logo">
                        <img src="images/FoodieNor logo design .png" alt="food_logo" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="heading-buttons">
                        <ul>
                          <li><button type="button" className="btn btn-outline-primary">Primary</button></li>
                          <li><button type="button" className="btn btn-outline-primary">Primary</button></li>
                          <li><button type="button" className="btn btn-outline-primary">Primary</button></li>
                        </ul>
                      </div>
                    </div>
                  </div>


                </div>
              </section>

              <section>
                <div className="section-discover">

                  <div className="row">
                    <div className="col-md-4">
                      <div className="discover">
                        <p>
                          Sub Title
                     <br></br>
                          <h2>Heading</h2>
                        </p>
                        <p className="loram">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio congue egestas ut vitae felis, pellentesque
                      </p>

                        <button className="button  arrow">Explore</button>

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="discover-card">
                        <img src="images/FoodieNor logo design .png" alt="food_logo" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="discover-card-buttons">
                        <ul>
                          <li><button type="button" className="btn btn-outline-primary">Primary</button></li>
                          <li><button type="button" className="btn btn-outline-primary">Primary</button></li>
                          <li><button type="button" className="btn btn-outline-primary">Primary</button></li>
                        </ul>
                      </div>
                    </div>
                  </div>


                </div>
              </section>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}


