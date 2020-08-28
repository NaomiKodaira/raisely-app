import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CardStyled from '../../components/Card';
import ButtonStyled from '../../components/Button';
import Input from '../../components/Input';

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

function Login() {
  return (
    <LoginStyled>
      <h1>Sign up</h1>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          email: Yup.string()
            .required('Required')
            .email('Invalid email'),
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
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
              onBlur={() => setFieldTouched('email', true)}
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
                Submit
              </ButtonStyled>
            </div>
          </form>
        )}
      </Formik>
    </LoginStyled>
  );
}

export default Login;
