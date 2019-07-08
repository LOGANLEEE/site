import React from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost, deletePost } from './action';
import Wrapper from './mowaWrapper';

function Mowa(props) {
    console.info('£££ props of mowa >> ', props);
    const title = 'titleTest';
    const id = 'idTest';

    return (
        <Wrapper>
            <button onClick={() => props.addPost(id, title)}>
                welcome to MOWA
            </button>
        </Wrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        mowa: state.mowa,
    };
};

const mapDispatchToProps = { addPost, updatePost, deletePost };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Mowa);
