import React from 'react';
import Wrapper from './Wrapper';

const info = console.info;

function renderList(nodes) {
    return nodes.map((node, idx) => {
        return (
            <li key={idx}>
                <span className='item1'>{node.from}</span>
                <a
                    className='item2'
                    href={node.link}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {node.title}
                </a>
                <span className='item3'>{node.author}</span>
                <span className='item4'>{node.time}</span>
            </li>
        );
    });
}

export default function MainContent(props) {
    // time Sorting logic
    const { ilbe, clien, bullpen } = props;
    const total = [];
    ilbe.map((node) => {
        total.push(node);
    });
    clien.map((node) => {
        total.push(node);
    });
    bullpen.map((node) => {
        total.push(node);
    });
    const result = renderList(total);
    return (
        <Wrapper className='item4'>
            <ul> {result}</ul>
        </Wrapper>
    );
}
