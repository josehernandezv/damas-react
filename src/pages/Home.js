import React from 'react';
import CenteredContainer from 'components/common/CenteredContainer';
import Button from 'components/common/Button';
import Headline from 'components/common/Headline';

const Home = props => {
    const goToRoom = () => {
        props.history.push('/room');
    };
    const goToUnderConstruction = () => {
        props.history.push('/under-construction');
    };
    return (
        <CenteredContainer>
            <Headline>Spanish Checkers</Headline>
            <Button onClick={goToRoom}>Local 1 vs 1</Button>
            <Button onClick={goToUnderConstruction}>Local vs Computer</Button>
            <Button onClick={goToUnderConstruction}>Online</Button>
        </CenteredContainer>
    );
};

export default Home;
