import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TiSocialFacebookCircular as FB, TiSocialInstagramCircular as Insta, TiSocialTwitterCircular as Twitter } from 'react-icons/lib/ti'

import FooterLogo from './images/footerlogo.png';

class Footer extends Component {
  render() {
    return (
      <div className="row footer text-white">
        <div className="col" />
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-3">
              <img className='img-fluid footerLogo' src={FooterLogo} alt='footerLogo' />
              <p className='text'>
                14520 Delta Lane, Suite 104 <br/>
                Huntington Beach, CA 92647 <br />
                Contact/Support Information <br />
                <FB /><Twitter /><Insta />
              </p>
            </div>
            <div className="col-2 footerDiv">
              <p className="footerTitle">Shop</p>
              <ul className="footerList text">
                <li>Main</li>
                <li>New Arrivals</li>
                <li>Polos</li>
                <li>Shorts</li>
                <li>Pants</li>
                <li>Hats</li>
                <li>T-Shirts</li>
              </ul>
            </div>
            <div className="col-2 footerDiv">
              <p className="footerTitle">Explore</p>
              <ul className="footerList text">
                <li>Video</li>
                <li>Lookbook</li>
                <li>Blog</li>
                <li>Team</li>
                <li>Brand</li>
                <li>Retail</li>
                <li>Custom</li>
              </ul>
            </div>
            <div className="col-2 footerDiv">
              <p className="footerTitle">Support</p>
              <ul className="footerList text">
                <li>Account</li>
                <li>Returns</li>
                <li>FAQ</li>
                <li>Legal</li>
                <li>Contract</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-3 footerDiv">
              <p className="footerTitle">Newsletter Signup</p>
              <p className="text">Product releases, new deals + more</p>
              <Field
                name="email"
                className='footerInput'
                placeholder="Enter Email to Sign Up"
                component='input'
                type='text'
              />
              <button className="footerSubmitBtn">SUBMIT</button>
            </div>
          </div>
        </div>
        <div className="col" />
      </div>
    );
  }
}

Footer = reduxForm({
  form: 'footerForm'
})(Footer);

export default connect(null)(Footer);
