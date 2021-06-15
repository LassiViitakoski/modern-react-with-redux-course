import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues => this.props.editStream(this.props.stream.id, formValues);

    render() {
        if (!this.props.stream) {
            return <div>Laoding...</div>       
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}   // Special type of props by redux-form to initialize form inputs
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { editStream, fetchStream }
)(StreamEdit);