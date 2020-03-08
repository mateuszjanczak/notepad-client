import React from "react";
import { connect } from "react-redux";
import {fetchItem as fetchItemAction} from "actions";
import styled from "styled-components";
import Note from "components/organisms/Note";

const Wrapper = styled.div`
  padding: 8rem;
`;

class SingleNote extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        const { fetchItem } = this.props;
        fetchItem(id);
    }

    render() {
        const {note} = this.props;

        return (
            <Wrapper>
                <Note key={note.id} note={note}/>
            </Wrapper>
        )
    }
}

SingleNote.defaultProps= {
    note: {}
};

const mapStateToProps = ({note}) => ({note});

const mapDispatchToProps = dispatch => ({
    fetchItem: (id) => dispatch(fetchItemAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleNote);

