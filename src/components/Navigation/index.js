import React from 'react';
import Wrapper from './Wrapper';

function tabGenerator(tabsInfo) {
    const result = tabsInfo.map((node, idx) => {
        const key = 'item' + (idx + 1);
        return (
            <li key={key} className={key}>
                <a href='http://localhost:3000'>{node}</a>
            </li>
        );
    });

    return result;
}

export default function template(props) {
    return (
        <Wrapper tabs={props.tabsInfo.length} className='item2'>
            <ol className='tabMother'>{tabGenerator(props.tabsInfo)}</ol>
        </Wrapper>
    );
}
