import React from 'react';
import PropTypes from 'prop-types';
import classes from './Board.module.css';
import Square from '../Square';
import boardMatrix from 'utils/boardMatrix';

const Board = props => {
    const squares = boardMatrix.map(row => {
        return row.map((item, index) => <Square key={index} value={item} />);
    });
    return <div className={classes.container}>{squares}</div>;
};

Board.propTypes = {};

export default Board;
