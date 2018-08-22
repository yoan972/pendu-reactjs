import React from 'react';


class Keyboard extends React.Component {
	

	render() {
		const Letters = (() => {
	      const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
	      return caps
	    })();

		return (
			 <div className="keyboard">
			 	{Letters.map((letter,index) => (
		          <div className={`key ${this.props.getFeedback(letter)}`} key={index} onClick={() => this.props.handleLetterClick(letter)}>{letter}</div>
		          ))}   
 				
			 </div>
		);
	}
}

export default Keyboard;