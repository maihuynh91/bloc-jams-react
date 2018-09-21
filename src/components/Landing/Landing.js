import React from "react";
import "./Landing.css"

const Landing = () =>(

  <div className="container">

    <div className = "row">
      <div className="col-md-12">
        <div className="main-timeline">
          <div className="timeline">
              <div className="timeline-content">
                <h3 className="title">Turn the music up! <i className="fa fa-globe"></i></h3>
              </div>
          </div>

          <div className="timeline">
            <div className="timeline-content">
              <h3 className="title">Choose your music<i className="fa fa-rocket"></i></h3>
              <p className="description">
              The world is full of music; why should you have to listen to music that someone else chose?
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-content">
              <h3 className="title">Unlimited, streaming, ad-free<i className="fa fa-rocket"></i></h3>
              <p className="description">
              No arbitrary limits. No distractions.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-content">
              <h3 className="title">Mobile enabled<i className="fa fa-rocket"></i></h3>
              <p className="description">
              Listen to your music on the go. This streaming service is available on all mobile platforms
              </p>
            </div>
          </div>
          
        </div> 
      </div>
    </div>
  </div>
);

export default Landing;
