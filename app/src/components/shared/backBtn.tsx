import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

interface Props {
    url: string,
    name: string
}

const BackBtn = (props: Props) => {
    const {url, name} = props
    return (
        <div className="back-btn">
            <FontAwesomeIcon icon={faArrowLeft} className="back-icon"/>
            <a href={url} className="back-link">{name}</a>
        </div>
    )
}

export default BackBtn;