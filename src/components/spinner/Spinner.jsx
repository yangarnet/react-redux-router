import React from 'react';
import styled, { keyframes } from 'styled-components';

// using the keyframes from styled component to define animation
const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Image = styled.img`
    animation: ${spin} 2.3s infinite linear;
    width: 30px;
    height: auto;
`;

const Spinner = () => <Image src="../../public/spin.png" atl="loading" />;

export default Spinner;
