import React from 'react'



const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osat={kurssi.osat} />
            Yhteensä <Yhteensa osat={kurssi.osat} /> tehtävää
        </div>

    )
}

const Osa = (props) => <li>{props.id} {props.nimi} {props.tehtavia}</li>

const Sisalto = ({ osat }) => {
    const osarivit = () =>
        osat.map(osa => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />)
    return (
        <ul>
            {osarivit()}
        </ul>

    )
}

const Otsikko = ({ kurssi }) => {
    return (
        <h1>
            {kurssi.nimi}
        </h1>
    )
}

const Yhteensa = ({ osat }) => osat.map(osa => osa.tehtavia).reduce(function (a, b) { return a + b })



export default Kurssi