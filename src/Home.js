import React, { Component } from 'react';
import { Link } from "@reach/router";

class Home extends Component{
    render() {
        const {user} = this.props;
        const biggerLead = {
            fontSize : 1.4 + 'em',
            fontWeight : 200,
        };
        return (
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-10 col-md-10 col-lg-8 col-xl-7">
                <div className="display-4 text-primary mt-3 mb-2">
                 Meeting Manager
                </div>
                <p className="lead" style={biggerLead}>
                  This simple app creates meetings, allows people to check in,
                  and picks random users to award giveaways. It's a working example
                  of a Single Page Application which includes connection to a
                  Google Firebase realtime database and routing. 
                </p>

                {user == null && (
                  <>
                    <Link
                      to="/register"
                      className="btn btn-outline-primary mr-2"
                    >
                      Register
                    </Link>{" "}
                    <Link to="/login" className="btn btn-outline-primary mr-2">
                      Log In
                    </Link>
                  </>
                )}
                {user && (
                  <Link to="/meetings" className="btn btn-primary">
                    Meetings
                  </Link>
                )}
              </div>
              {/* <!-- columns --> */}
            </div>
          </div>
        );
    }
}

export default Home;