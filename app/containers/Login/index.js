import React, { memo } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import CardStyled from '../../components/Card';
import ButtonStyled from '../../components/Button';
import Input from '../../components/Input';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './redux-saga/reducer';
import saga from './redux-saga/saga';
import selectLoginDomain from './redux-saga/selectors';
import { doSignUp } from './redux-saga/actions';
import api from '../../api';

const LoginStyled = styled(CardStyled)`
  height: fit-content;
  /* max-height: calc(50vh); */
  width: calc(70vh);

  & h1 {
    margin-bottom: 1rem;
  }

  & form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div.row {
      display: flex;
      flex-direction: row;

      & > * {
        margin-right: 10px;
      }
      & > *:last-child {
        margin-right: 0;
      }
    }

    & > div.button-align {
      & button {
        width: 200px;
        display: inline-block;
        float: right;
      }
    }
  }
`;
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confPassword: '',
};

function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const { dispatch, login } = props;

  return (
    <LoginStyled>
      <h1>Sign up</h1>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          email: Yup.string().test(
            'checkUser',
            'Email already exists',
            async value => {
              await Yup.object()
                .shape({
                  email: Yup.string()
                    .required('Required')
                    .email('Invalid email'),
                })
                .validate({ email: value });

              return new Promise(resolve =>
                api.postCheckUser({ email: value }).then(res => {
                  if (res.data.status === 'EXISTS') resolve(false);
                  resolve(true);
                }),
              );
            },
          ),
          password: Yup.string()
            .required('Required')
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              'Password must have at least 8 characteres and must contain one uppercase, one lowercase, one number and one special character',
            ),
          confPassword: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], "Passwords don't match"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          dispatch(doSignUp(values));
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldTouched,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <Input
                label="First name:"
                type="firstName"
                name="firstName"
                onChange={handleChange}
                onBlur={() => setFieldTouched('firstName', true)}
                value={values.firstName}
                error={touched.firstName && errors.firstName}
              />
              <Input
                label="Last name:"
                type="lastName"
                name="lastName"
                onChange={handleChange}
                onBlur={() => setFieldTouched('lastName', true)}
                value={values.lastName}
                error={touched.lastName && errors.lastName}
              />
            </div>

            <Input
              label="Email:"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={() => {
                setFieldTouched('email', true);
              }}
              value={values.email}
              error={touched.email && errors.email}
            />
            <Input
              label="Password:"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={() => setFieldTouched('password', true)}
              value={values.password}
              error={touched.password && errors.password}
            />
            <Input
              label="Confirm Pass:"
              type="password"
              name="confPassword"
              onChange={handleChange}
              onBlur={() => setFieldTouched('confPassword', true)}
              value={values.confPassword}
              error={touched.confPassword && errors.confPassword}
            />
            <div className="button-align">
              <ButtonStyled type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submiting' : 'Submit'}
              </ButtonStyled>
            </div>
          </form>
        )}
      </Formik>
    </LoginStyled>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: selectLoginDomain,
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
  )(Login),
);
