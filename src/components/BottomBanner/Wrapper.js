import styled from 'styled-components';

const Wrapper = styled.div`
    background: green;
    color: white;
    width: 100%;
    height: 100%;
    display: grid;

    .content {
        grid-row: 1;
        text-align: center;
        /* grid-column: 6/1,5; */
        grid-column-start: 1;
        grid-column-end: 11;
    }

    .versionTag {
        text-align: right;
        grid-row: 1;
        /* grid-column: 6/6; */
        grid-column-start: 11;
        grid-column-end: 12;
    }
`;

export default Wrapper;
