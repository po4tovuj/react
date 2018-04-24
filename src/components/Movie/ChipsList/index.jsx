import React from 'react';
import './styles.css';
import v4 from 'uuid/v4';
const ChipsList = ({ chips }) => {
    console.log(`chips is ${chips}`);

    return (
        <ul className="chip-list">
            {chips.map(chip => (
                <li key={v4()} id={v4()} className="chip-list__items">
                    {chip}
                </li>
                ))}
        </ul>
    );
};
export default ChipsList;