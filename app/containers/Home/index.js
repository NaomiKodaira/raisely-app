import React, { memo } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import CardStyled from '../../components/Card';
import { selectAppUser, selectAppSignUp } from '../App/redux-saga/selectors';

const HomeStyled = styled(CardStyled)`
  height: fit-content;
  width: calc(70vh);
  font-size: 18px;

  & > p {
    margin-bottom: 1rem;
  }

  & > pre,
  & > pre > span {
    color: #707070;
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }
`;

function Home(props) {
  const { user, signUp } = props;

  return (
    <HomeStyled>
      <h1>{signUp ? 'Signed up!!' : 'Logged in!!'}</h1>
      {signUp && <p>{signUp}</p>}

      <pre>
        <span>User Data saved on Redux: </span>
        {JSON.stringify(user, null, 2)}
      </pre>
    </HomeStyled>
  );
}

Home.propTypes = {
  user: PropTypes.object.isRequired,
  signUp: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectAppUser,
  signUp: selectAppSignUp,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(
  compose(
    withConnect,
    memo,
  )(Home),
);
