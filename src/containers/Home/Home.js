import React, { Component } from 'react';
import { Link } from 'react-router';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <h1>
              <Link to="/">{config.app.title}</Link>
            </h1>
            <h2>{config.app.description}</h2>
          </div>
        </div>

        <div className="container">
        </div>

      </div>
    );
  }
}
