import React from 'react';
import './styles.css';
const ChipsList = ({ chips }) => {
    // console.log(`chips is ${chips}`)

    return (
        <ul className="chip-list">
            {chips.map(chip => (
                <li key={chip} className="chip-list__items">
                    {chip}
                </li>
                ))}
        </ul>
    );
};
export default ChipsList;