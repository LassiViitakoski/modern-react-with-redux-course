import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

const StreamCreate = ({ createStream, }) => {
    const onSubmit = (formValues) => {
        createStream(formValues);
    }

    return (
        <div>
            <h3>Create a Stream</h3>
            <StreamForm onSubmit={onSubmit} />
        </div>
    );
};

export default connect(
    null,
    { createStream }
)(StreamCreate);


/*
export default connect(
    null,
    { createStream }
)(formWrapped);

const formWrapped = reduxForm({
    form: 'streamCreate', // Formin nimi, voi olla mikä haluaa
    validate
})(StreamCreate);
*/