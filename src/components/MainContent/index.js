import React from 'react';
import moment from 'moment';

import Wrapper from './Wrapper';

const info = console.info;

function renderList(nodes) {
    nodes.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        a.time = moment().format(a.time);
        b.time = moment().format(b.time);

        return a.time - b.time;
    });

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
