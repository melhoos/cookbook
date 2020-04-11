import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import {iconSize} from '../../utilities/iconSize';
import '../../styles/icon.scss';

interface Props {
    iconSize: iconSize
}

const OnNoneFound = (props: Props) =>  {
    const {iconSize} = props;
    return (
        <div className="response-icon">
            <h2>Oisann! Fant ingenting.</h2>
            <FontAwesomeIcon className="heart-broken-icon" icon={faHeartBroken} spin={true} size={iconSize}/>
        </div>
    );
}

export default OnNoneFound;