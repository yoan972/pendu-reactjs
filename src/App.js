import React, { Component } from 'react';
import './App.css';
import Pendu from './Pendu';
import EndScreen from './EndScreen';
import Keyboard from './Keyboard'

const GuessWord = (props) => <p className="word">{props.phrase}</p>
const Score = (props) => <p className="score">score : {props.score}</p>


                                  
class App extends Component {
  state = {
    phrase : this.getRandomPhrase(),
    usedLetters : [],
    matchedLetters : [],
    pendu : 0,
    score : 0

  }

  getRandomPhrase() {
    const words = [];
    const NumberOfWords = 28;

    words[1] = "escapology"
    words[2] = "brightwork"
    words[3] = "verkrampte"
    words[4] = "protectrix"
    words[5] = "nudibranch"
    words[6] = "grandchild"
    words[7] = "newfangled"
    words[8] = "flugelhorn"
    words[9] = "mythologer"
    words[10] = "pluperfect"
    words[11] = "jellygraph"
    words[12] = "quickthorn"
    words[13] = "rottweiler"
    words[14] = "technician"
    words[15] = "cowpuncher"
    words[16] = "middlebrow"
    words[17] = "jackhammer"
    words[18] = "triphthong"
    words[19] = "wunderkind"
    words[20] = "dazzlement"
    words[21] = "jabberwock"
    words[22] = "witchcraft"
    words[23] = "pawnbroker"
    words[24] = "thumbprint"
    words[25] = "motorcycle"
    words[26] = "cryptogram"
    words[27] = "torchlight"
    words[28] = "bankruptcy"

    let rnd = Math.ceil(Math.random() * NumberOfWords)

    return words[rnd].toUpperCase()
  }

  computeDisplay(phrase, usedLetters) {

    return phrase.replace(/\w/g,
      (letter) => (usedLetters.includes(letter) ? letter : '_')
    )
  }

 handleLetterClick = letter => {
  const {usedLetters, phrase, matchedLetters, pendu, score} = this.state

  if (phrase.includes(letter) && !usedLetters.includes(letter) ) {
    this.setState({matchedLetters : [...matchedLetters,letter]})
     this.setState({ usedLetters: [...usedLetters,letter] })
     this.setState({score : score + 3})
     console.log('tu es sur la bonne voie')
  }

  if(!phrase.includes(letter) && !usedLetters.includes(letter) ) {
     console.log('essaye encore')
    this.setState({ usedLetters: [...usedLetters,letter] })
    this.setState({pendu : pendu + 1})
    this.setState({score : score - 2})
    
  }
  if (usedLetters.includes(letter)) {
    console.log('deja tenté')
    this.setState({pendu : pendu + 1})
    this.setState({score : score - 1})
  }
  this.computeDisplay(phrase, usedLetters)
  console.log('le mot est : ', phrase);
  }
  getFeedback = letter => {
    const { usedLetters } = this.state
    if (usedLetters.includes(letter)) {
      return 'clicked'
    }
    
  }
  playAgain = () => {
    const {usedLetters, phrase} = this.state
    this.setState({usedLetters: [], matchedLetters: [], phrase : this.getRandomPhrase(),pendu : 0, score: 0 })
    this.computeDisplay(phrase, usedLetters)
  }
  render() {

    const { phrase , usedLetters, matchedLetters,pendu } = this.state

    let arr = phrase.split('')
    let result = arr.sort().reduce((accumulator, current) => {
        const length = accumulator.length
        if (length === 0 || accumulator[length - 1] !== current) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);



    let won = result.length === matchedLetters.length

    let endScreen = null
    
    if (won) {
      endScreen = <EndScreen playAgain={this.playAgain} won={true}/>
    }
    if (pendu === 6) {
      endScreen = <EndScreen playAgain={this.playAgain} won={false}/>
    }


    return (
      <div className="app">
        <Score score={this.state.score} />
        <Pendu pendu={this.state.pendu} />
        <GuessWord phrase={this.computeDisplay(phrase , usedLetters)} />
        <Keyboard getFeedback={this.getFeedback} handleLetterClick={this.handleLetterClick} />

        {endScreen}
        
      </div>
      
    );
  }
}

export default App;