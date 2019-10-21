import React from 'react';
import PropTypes from 'prop-types';
import classes from './Piece.module.css';

const Piece = props => {
    return (
        <div
            className={classes.wrapper}
            style={{ backgroundColor: props.isWhite ? '#FFF' : '#000' }}
        >
            <div className={classes.center} />
        </div>
    );
};

Piece.propTypes = {
    isWhite: PropTypes.bool,
    isBlack: PropTypes.bool,
    isCrown: PropTypes.bool,
};

export default Piece;
