import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { Router } from 'react-router';

import styles from './styles.module.css'

class App extends React.Component {
	static contextTypes = {
    router: PropTypes.object
  }

	static propTypes = {
		routes: PropTypes.element.isRequired,
    history: PropTypes.object.isRequired
  };

  get content() {
    return (
			<Router 
				routes={this.props.routes}
				history={this.props.history} />
		)
  }
	
	render() {
		return (
			<div style={{ height: '100%' }}>
				{this.content}
			</div>)
	}
}

module.exports = App;
