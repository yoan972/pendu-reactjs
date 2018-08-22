import React from 'react';


class Pendu extends React.Component {
	render() {
		return (
			<div className="pendu"><img src={`/assets/${this.props.pendu}.svg`} alt="pendu" /></div>
		);
	}
}

export default Pendu;