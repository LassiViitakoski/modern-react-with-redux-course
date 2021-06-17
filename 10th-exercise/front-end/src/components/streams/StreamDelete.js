import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
    state = { number: 10 };
    renderActions() {
        const { id } = this.props.match.params;
        return (
            <div>
                <button
                    className="ui button negative"
                    onClick={() => this.props.deleteStream(id)}
                >
                    Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </div>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`;
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
        this.setState({ number: 20 });
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(
    mapStateToProps,
    { fetchStream, deleteStream }
)(StreamDelete);