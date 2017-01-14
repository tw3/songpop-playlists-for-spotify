import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProgressBar, Row, Col } from 'react-bootstrap';
import Nav from './nav/Nav';
import '../stylesheets/styles.scss';

export class App extends React.Component {
	// pre-render logic
	componentWillMount() {
		// the first time we load the app, we need to load some sort of data
		// e.g. this.props.dispatch({ type: 'OBJ_FETCH_SOMETHING' });
	}

	// render
	render() {
		// show the loading state while we wait for the app to load
		const { children } = this.props;

		// render
		return (
			<div className="container">

				<div className="top-header">
					<Row>
						<Col xs={12}>
							<img
								src="/media/longlogo.png" alt="SongPop Playlists for SongPop"
								width="320" height="100"
							/>
						</Col>
					</Row>
				</div>

				<div className="pf-app">
					<Col
						componentClass="nav"
						className="pf-nav"
						lg={3} md={4} sm={4} xs={6}
					>
						<Nav />
					</Col>
					<Col
						componentClass="section"
						id="pf-playlist-view" className="pf-playlist-view"
						lg={9} md={8} sm={8} xs={6}
					>
						{children}
					</Col>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.node,
};

// export the connected class
function mapStateToProps(state) {
	return {
		// This is where you map state variables to props for this component
	};
}

export default connect(mapStateToProps)(App);
