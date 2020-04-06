import React, {useState} from 'react';
import {Collapse} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {postIngredientCategorie} from './ingredientCategoryService';
import {faPlus, faTimes, faSave} from '@fortawesome/free-solid-svg-icons';
import {ConnectionStatus} from '../../../utility/dataService';

const onSave = (e: React.MouseEvent<HTMLElement>, newIngredientCategory: string) => {
    e.preventDefault();
    postIngredientCategorie(newIngredientCategory).then(response => {
        if (response.status === ConnectionStatus.SUCCESS) window.location.reload();
    })
}

const IngredientCategoryForm = () => {
    const [open, setOpen] = useState(false);
    const [newIC, setNewIC] = useState("");

    return ( 
        <div>
            <button className="add-btn" onClick={() => setOpen(!open)} aria-controls="new-ingredient-category" aria-expanded={open}>
                {open ? "Lukk" : "Legg til"} <FontAwesomeIcon icon={open ? faTimes : faPlus}/>
            </button>
            <Collapse in={open}>
                <div id="new-ingredient-category">
                    <form>
                        <input className="input-field" id="new-ingredient-category" onChange={e => setNewIC(e.target.value)} type="text" placeholder="Ny ingrediens kategori" value={newIC}>
                            
                        </input>
                        <button className="save-btn" type="submit" onClick={(e: React.MouseEvent<HTMLElement> ) => onSave(e, newIC)}>
                            {"Lagre"} <FontAwesomeIcon icon={faSave}/>
                        </button>
                    </form>
                </div>
            </Collapse>
        </div>
    )
}

export default IngredientCategoryForm