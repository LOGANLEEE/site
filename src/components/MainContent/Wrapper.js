import styled from 'styled-components';

const Wrapper = styled.div`
    color: white;
    background: black;

    ul {
        list-style: none;
        li {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));

            a:link {
                color: white;
                text-decoration: none;
            }

            /* visited link */
            a:visited {
                color: green;
                text-decoration: none;
            }

            /* mouse over link */
            a:hover {
                color: hotpink;
                text-decoration: none;
            }

            /* selected link */
            a:active {
                color: blue;
                text-decoration: none;
            }
        }
    }
    .item1 {
        grid-column: 1;
        grid-row: 1;
        text-align: left;
    }
    .item2 {
        grid-column: 2/9;
        grid-row: 1;
        text-align: left;
    }
    .item3 {
        grid-column: 10/11;
        grid-row: 1;
        text-align: left;
    }
    .item4 {
        grid-column: 12;
        grid-row: 1;
        text-align: left;
    }
`;

export default Wrapper;
