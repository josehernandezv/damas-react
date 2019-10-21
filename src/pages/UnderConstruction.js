import React from 'react';
import styled from 'styled-components';
import CenteredContainer from 'components/common/CenteredContainer';
import Headline from 'components/common/Headline';
import Subtitle from 'components/common/Subtitle';
import builderImage from 'assets/builder.png';

const Image = styled.img`
    height: auto;
    width: 90vw;
    @media (min-width: 768px) {
        height: 60vh;
        width: auto;
    }
`;

const Home = () => {
    return (
        <CenteredContainer>
            <Image src={builderImage} alt="building" />
            <Headline>This page is under construction</Headline>
            <Subtitle>We're working on it</Subtitle>
        </CenteredContainer>
    );
};

export default Home;
