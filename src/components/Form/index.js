import React from "react";
import PropTypes from 'prop-types';
//form
import {FaPlus} from 'react-icons/fa';

//css 
import './Form.css';

export default function Form({handleSubmit, handleCHange, novaTarefa}) {
    return (
        <form onSubmit={handleSubmit} action="#" className="form">
                    <input onChange={handleCHange} type="text" value={novaTarefa} />
                    <button type="submit" > <FaPlus /></button>
                </form>
    );
}

Form.propTypes = {
    handleCHange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
};
