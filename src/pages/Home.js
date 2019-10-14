import React from 'react';
import CenteredContainer from 'components/common/CenteredContainer';
import Button from 'components/common/Button';
import Headline from 'components/common/Headline';

const Home = () => {
    return (
        <CenteredContainer>
            <Headline>Spanish Checkers</Headline>
            <Button>Local 1 vs 1</Button>
            <Button>Local vs Computer</Button>
            <Button>Online</Button>
        </CenteredContainer>
    );
};

export default Home;
