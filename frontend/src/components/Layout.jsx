import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Nav from './nav/Nav';

const Layout = (props) => {
	return (
		<div className="container layout-container">
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
					{props.children}
				</Col>
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default connect()(Layout);
