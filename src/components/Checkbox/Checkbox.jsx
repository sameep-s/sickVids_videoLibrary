import React from 'react';
import './checkbox.css';

const Checkbox = () => {
    return (
        <>
            <div className="wrapper__checkbox flex a-item-center mt-1 mb-1">
                <input type="checkbox" id="vehicle1" name="playlist" value="Bike" />
                <label htmlFor="playlist">hello</label>
            </div>
        </>
    )
}

export default Checkbox;