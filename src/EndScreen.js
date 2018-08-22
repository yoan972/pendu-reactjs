import React from 'react';


class EndScreen extends React.Component {
	render() {
		return (
			<div className="endscreen">
				<h2 className="endscreen-title">{this.props.won ? "Gagné !" : "Perdu !"}</h2>
				<button className="endscreen-replay" onClick={() => this.props.playAgain()} >Rejouer</button>
			</div>
		);
	}
}

export default EndScreen;