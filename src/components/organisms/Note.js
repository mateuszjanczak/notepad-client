import React from "react";
import {Redirect, Switch, Route, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import {editItem as editItemAction, removeItem as removeItemAction} from "actions";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen,  faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {routes} from "routes";
//import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  border: 1px solid #333;
  color: black;
  background: linear-gradient(0deg, rgba(255,255,200,1) 20%, rgba(255,255,225,1) 100%);
`;

const Text = styled.div`
  text-align: justify;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;  
  min-height: calc(6 * 1.8rem);
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 4rem);
  grid-gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Action = styled.div``;

const Line = styled.hr`
  border-top: 1px solid #333;
`;

const Colors = {
  remove: '#EF3E36'
};

class Note extends React.Component {

    state = {
        redirect: false
    };

    handleClick = () => {
        this.setState({
           redirect: !this.state.redirect
        });
    };

    handleRemove = (id) => {
        const {history, removeItem} = this.props;
        removeItem(id);
        setTimeout(()=>{history.push('/notes')}, 500);
    };

    render() {
        const {id, title, content} = this.props.note;

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={`notes/${id}`} />;
        }

        return (
            <Wrapper>
                <Title>{title}</Title>
                <Text>{content}</Text>
                <Line/>
                <Actions>
                    <Switch>
                        <Route exact path={routes.notes}>
                            <Action>
                                <Button onClick={() => this.handleClick()}>
                                    <FontAwesomeIcon icon={faBookOpen}/>
                                </Button>
                            </Action>
                        </Route>
                        <Route exact path={routes.singleNote}>
                            <Action>
                                <Button>
                                    <FontAwesomeIcon icon={faEdit}/>
                                </Button>
                            </Action>
                            <Action>
                                <Button color={Colors.remove} onClick={() => this.handleRemove(id)}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Button>
                            </Action>
                        </Route>
                    </Switch>
                </Actions>
            </Wrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    removeItem: (id) => dispatch(removeItemAction(id)),
    editItem: (id, itemContent) => dispatch(editItemAction(id, itemContent))
});

export default withRouter(connect(null, mapDispatchToProps)(Note));