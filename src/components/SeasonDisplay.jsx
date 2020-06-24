import React from 'react';
import '../SeasonDisplay.css';
import Clock from './Clock';

const getSeason = (lat, month) => { 
    if (month > 2 && month < 9 ) {  //meses del 0 al 11
        return  lat > 0 ? 'summer' : 'winter';
    } else{
        return  lat > 0 ? 'winter' : 'summer';
    }
};

const seasonConfig = {
    summer: {
        text: 'it\'s hot!',
        icon: 'sun'
    },
    winter: {
        text: 'it\'s really cold!',
        icon: 'snowflake'
    }

}

const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());
    const { text, icon } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left huge ${icon} icon`} />
            <div>
                Your latitude: {props.lat} <br/>
                <h1>Season: {season}</h1>
                <h3>{text}</h3>
                The time is: <Clock/>
            </div>
            <i className={`icon-rigth huge ${icon} icon`} />
        </div>
    );
}

export default SeasonDisplay;