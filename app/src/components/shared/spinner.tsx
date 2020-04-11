import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {iconSize} from '../../utilities/iconSize';
import {faBirthdayCake, faWineGlass, faWineBottle, faPizzaSlice, faHamburger, faFish, faCarrot, faAppleAlt, faIceCream, faPepperHot, faLemon} from '@fortawesome/free-solid-svg-icons';
import '../../styles/icon.scss';

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const getRandomIcon = () => {
    const icons = [faBirthdayCake, faWineGlass, faWineBottle, faPizzaSlice, faHamburger, faFish, faCarrot, faAppleAlt, faIceCream, faPepperHot, faLemon]
    const randomNum = getRandomInt(icons.length);
    return icons[randomNum];
}

interface Props {
    iconSize: iconSize
}

const Spinner = (props: Props) =>  {
    const {iconSize} = props;
    return (
        <div className="response-icon">
            <FontAwesomeIcon className="spinner-icon" icon={getRandomIcon()} spin={true} size={iconSize}/>
        </div>
    );
}

export default Spinner;