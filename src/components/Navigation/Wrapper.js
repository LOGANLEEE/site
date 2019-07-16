import styled from 'styled-components';

function test(node) {
    let result = [];
    for (let i = 1; i < node + 1; i++) {
        result.push(
            `.item${i} {
                list-style: none;
                grid-row: 1;
                grid-column-start: ${i};
                grid-column-end: ${i};
                text-align: center;
            }`,
        );
    }
    return result;
}

const Wrapper = styled.div`
    background: blue;
    color: white;
    display: grid;

    ${(props) => test(props.tabs)}

    .tabMother {
        display: grid;
    }
`;

export default Wrapper;
