import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import Layout from './Layout';
import { collectionFetchPlaylists } from '../actions/collectionActions';
import '../stylesheets/styles.scss';

export class App extends React.Component {
	// pre-render logic
	componentWillMount() {
		// the first time we load the app, we need to load some sort of
		this.props.dispatch(collectionFetchPlaylists());
	}

	constructor(props) {
		super(props);

		// default ui local state
		this.state = {
		};
	}

	// render
	render() {
		// show the loading state while we wait for the app to load
		const { bInit, children } = this.props;

		// render
		return (
			<div>
				{!bInit ? (
					<Loading>
						{children}
					</Loading>
				) : (
					<Layout>
						{children}
					</Layout>
				)}
			</div>
		);
	}
}

App.propTypes = {
	bInit: PropTypes.bool,
	children: PropTypes.node,
	dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		bInit: state.collectionData && state.collectionData.bInit,
	};
};

export default connect(mapStateToProps)(App);
