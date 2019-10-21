import React from 'react';
import PropTypes from 'prop-types';
import classes from './Square.module.css';
import Piece from '../Piece';

const Square = props => {
    const { value } = props;
    let piece = null;
    if (value === 2 || value === 3) {
        piece = <Piece isWhite={value === 2} />;
    }
    return (
        <div
            className={[
                classes.square,
                value === 0 ? classes.unusedSquare : classes.usedSquare,
            ].join(' ')}
        >
            {piece}
        </div>
    );
};

Square.propTypes = {
    value: PropTypes.number,
};

export default Square;
