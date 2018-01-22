import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({ hyva, neutraali, huono }) => {
    if (hyva + neutraali + huono === 0) {
        return (
            <p>Palautetta ei ole vielä tullut.</p>
        )
    }
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        keskiarvo
                    </td>
                    <td>
                        {((hyva - huono) / (huono + neutraali + hyva)).toFixed(2)}
                    </td>
                </tr>
                <tr>
                    <td>
                        positiivisia
                    </td>
                    <td>
                        {(hyva * 100 / (hyva + huono + neutraali)).toFixed(1)}%
                    </td>
                </tr>
            </tbody>

        </table>
    )

}




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    

    plus = (palaute) => {
        console.log(palaute)
        return () => {
            this.setState({ [palaute]: this.state[palaute] + 1 })
        }
    }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <Button text='hyvä' handleClick={this.plus('hyva')} />
                <Button text='neutraali' handleClick={this.plus('neutraali')} />
                <Button text='huono' handleClick={this.plus('huono')} />

                <br />
                <br />

                <table>
                    <tbody>
                        <tr>
                            <td>hyvä</td>
                            <td>{this.state.hyva}</td>
                        </tr>
                        <tr>
                            <td>neutraali</td>
                            <td>{this.state.neutraali}</td>
                        </tr>
                        <tr>
                            <td>huono</td>
                            <td>{this.state.huono}</td>
                        </tr>
                    </tbody>

                </table>

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


