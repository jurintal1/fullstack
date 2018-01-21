import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const Statistics = ({hyva, neutraali, huono}) => {
    if (hyva + neutraali + huono === 0) {
        return (
            <p>Palautetta ei ole vielä tullut.</p>
        )
    }
    return (
        <div>
            <p>keskiarvo {(hyva - huono) / (huono + neutraali + hyva)} </p>
            <p>positiivisia {hyva * 100 / (hyva + huono + neutraali)}%</p>
        </div>
    )
    
}




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva : 0,
            neutraali : 0,
            huono : 0
        }
    }

    lisaaHyva = () => {
        this.setState({hyva : this.state.hyva + 1})
    }

    lisaaNeutraali = () => {
        this.setState({neutraali : this.state.neutraali + 1})
    }

    lisaaHuono = () => {
        this.setState({huono : this.state.huono + 1})
    }
   
    plus = (palaute) => {
        
        console.log(palaute)
        return () => {
          this.setState({[palaute] : this.state[palaute] + 1 }) 
        }
      }

    render() {
        return (
            <div>
            <h1>anna palautetta</h1>
            <Button text='hyvä' handleClick={this.plus('hyva')} />
            <Button text='neutraali' handleClick={this.plus('neutraali')} />
            <Button text='huono' handleClick={this.plus('huono')} />              

            <p>hyvä {this.state.hyva}</p>
            <p>neutraali {this.state.neutraali}</p>
            <p>huono {this.state.huono}</p>

            <h1>statistiikka</h1>

            <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} />
            
            

            </div>
        )
    }

    
}





ReactDOM.render(
    <App />,
     document.getElementById('root')
)


