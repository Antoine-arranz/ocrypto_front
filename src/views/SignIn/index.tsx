import { Formiz, useForm } from '@formiz/core';
import { isEmail, isPattern } from '@formiz/validations';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import FormizSimpleInput from '../../components/Formiz';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import { passwordRegex } from '../../interface/formSchema/user';
import Wrapper from '../../components/Wrapper';
import Spacer from '../../components/Spacer';
import { UserSignInI } from '../../interface/formSchema/user';
import paths from '../../routes/user/paths';
import { SignInPropsI } from '../../interface/user';
const SingIn: React.FC<SignInPropsI> = ({
  user,
  handleSubmitSignInForm,
  history,
}) => {
  const signUpForm = useForm();
  const save = async (data: UserSignInI) => {
    await handleSubmitSignInForm(data);
    history.push(paths.login);
  };
  return (
    <Wrapper width='50%' margin='auto'>
      {user.loading && <Loader />}
      <Spacer height='10px' />
      <Formiz connect={signUpForm} onValidSubmit={save}>
        <form onSubmit={signUpForm.submit}>
          <Grid>
            <Grid.Row columns='3'>
              <Grid.Column>
                <FormizSimpleInput
                  type='firstName'
                  name='firstName'
                  label='First name'
                  placeholder='Michel'
                  required='First name is required'
                />
              </Grid.Column>
              <Grid.Column>
                <FormizSimpleInput
                  type='lastName'
                  name='lastName'
                  label='Last name'
                  placeholder='Dupont'
                  required='Last name is required'
                />
              </Grid.Column>
              <Grid.Column>
                <FormizSimpleInput
                  type='country'
                  name='country'
                  label='country'
                  placeholder='FR'
                  required='Country is required'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='1'>
              <Grid.Column>
                <FormizSimpleInput
                  type='email'
                  name='email'
                  label='Email'
                  placeholder='test@test.com'
                  required='Email is required'
                  validations={[
                    {
                      rule: isEmail(),
                      message: 'This is not a valid email',
                    },
                  ]}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='2'>
              <Grid.Column>
                <FormizSimpleInput
                  type='password'
                  name='password'
                  label='Password'
                  placeholder='Password'
                  required='Password is required'
                  validations={[
                    {
                      rule: isPattern(passwordRegex),
                      message:
                        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
                    },
                  ]}
                />
              </Grid.Column>
              <Grid.Column>
                <FormizSimpleInput
                  type='password'
                  name='confirmPassword'
                  label='Confirm password'
                  placeholder='Password'
                  required='Password is required'
                  validations={[
                    {
                      rule: (value: any) =>
                        signUpForm.values.password === value,
                      deps: [signUpForm.values.password],
                      message: 'Passwords do not match',
                    },
                  ]}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Spacer height='10px' />
          <Button size='large' type='submit' content='Submit' />
        </form>
      </Formiz>
    </Wrapper>
  );
};
export default SingIn;
