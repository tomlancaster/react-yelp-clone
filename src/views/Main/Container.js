import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

import styles from './styles.module.css'

import {searchNearby} from 'utils/googleApiHelpers'
import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'

export class Container extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }

	onReady(mapProps, map) {
    // When the map is ready and mounted
		const {google} = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        // We got some results and a pagination object
				this.setState({
          places: results,
          pagination
        })
      }).catch((status, result) => {
        // There was an error
      })
  }

  render() {
    return (
				<Map
					onReady={this.onReady.bind(this)}
          google={this.props.google}
					visible={false}
					className={styles.wrapper}>
						<Header />
						<Sidebar 
							title={'Restaurants'}
            	places={this.state.places}
						/>
				</Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
