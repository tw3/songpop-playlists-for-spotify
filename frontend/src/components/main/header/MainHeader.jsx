import React, { PropTypes } from 'react';
import MainHeaderImage from './MainHeaderImage';
import MainHeaderTitle from './MainHeaderTitle';
import MainHeaderDescription from './MainHeaderDescription';
import MainHeaderButtons from './MainHeaderButtons';
import MainHeaderInfoBar from './MainHeaderInfoBar';
import './header.scss';

const MainHeader = (props) => {
	return (
		<header>
			<section>
				<div className="header-container">
					<MainHeaderImage />
					<div className="header-interior header-data">
						<MainHeaderTitle />
						<MainHeaderDescription />
						<MainHeaderButtons />
					</div>
				</div>
			</section>
			<MainHeaderInfoBar />
		</header>
	);
};

MainHeader.propTypes = {};

export default MainHeader;
