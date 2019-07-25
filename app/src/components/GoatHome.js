import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchGoat } from '../store/actions';
import Loader from  'react-loader-spinner';

const GoatHome = props => {
    
    const [showing, setShowing] = useState(false);

    const findTheGoat = e => {
        e.preventDefault();
        props.fetchGoat();
    }
    return (
        <div>
            <h1>Who is the GOAT?</h1>
            <h2>Tom Brady? Michael Jordan?</h2>
            {props.lookingForGoat
                ? <Loader 
                    type="ThreeDots" 
                    color="orange" 
                    height={80} 
                    width={80} 
                    />
                : props.error 
                ? 
                    <div>
                        <h4>You have an oopsie!</h4>
                        <p>{props.oopsie}</p>
                    </div>
                :
                 <div>
                    <button 
                        onClick={findTheGoat}
                    >
                        Find the true GOAT
                    </button>
                    <h4>{props.goatSetup}</h4>
                    <button onClick={() =>
                        setShowing(!showing)
                    }>Toggle Answer</button>
                    {showing
                        ? <h3>{props.goatPunchline}</h3>
                        : null
                    }
                  </div>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        lookingForGoat: state.lookingForGoat,
        oopsie: state.oopsie,
        goatSetup: state.goatSetup,
        goatPunchline: state.goatPunchline
    }
}

export default connect(
    mapStateToProps,
    { fetchGoat }
)(GoatHome);