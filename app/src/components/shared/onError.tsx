import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBug} from '@fortawesome/free-solid-svg-icons';
import {iconSize} from '../../utilities/iconSize';
import '../../styles/icon.scss';

interface Props {
    iconSize: iconSize
}

const OnError = (props: Props) =>  {
    const {iconSize} = props;
    return (
        <div className="response-icon">
            <h1>Uh-oh! Noe gikk visst galt. Prøv igjen senere.</h1>
            <FontAwesomeIcon className="bug-icon" icon={faBug} spin={true} size={iconSize}/>
        </div>
    );
}

export default OnError;