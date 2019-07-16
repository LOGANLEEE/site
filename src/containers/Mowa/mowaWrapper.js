import styled from 'styled-components';

const Wrapper = styled.div`
    background: orange;
    color: white;
    width: 100%;
    height: 100%;

    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    /* grid-auto-columns: 3; */
    /* grid-gap: 0px; */
    /* grid-auto-rows: minmax(100px, auto); */

    .item1 {
        grid-row: 1;
        grid-column: 1/12;
    }
    .item2 {
        grid-row: 2;
        grid-column: 1/12;
    }
    .item3 {
        grid-row: 3;
        grid-column: 1/2;
    }
    .item4 {
        grid-row: 3;
        grid-column: 2/11;
    }
    .item5 {
        grid-row: 3;
        grid-column: 11/12;
    }
    .item6 {
        grid-row: 4;
        grid-column: 1/12;
    }
`;

export default Wrapper;
