import { Formiz, useForm } from '@formiz/core';
import React, { useEffect, useState } from 'react';
import FormizSimpleInput from '../../../../components/Formiz';
import Spacer from '../../../../components/Spacer';
import Wrapper from '../../../../components/Wrapper';
import Button from '../../../../components/Button';
import { Dropdown, Grid, Modal } from 'semantic-ui-react';
import FormizDropdownInput from '../../../../components/Formiz/FormizDropdownInput';

const AddEvent: React.FC<any> = ({
  open,
  handleClose,
  walletId,
  getPlatforms,
  platforms,
  getCurrencies,
  currencies,
}) => {
  const [type, setType] = useState<any>('');
  const eventForm = useForm();
  const save = (value: any) => {
    setType('');
    handleClose();
  };

  useEffect(() => {
    getPlatforms();
    getCurrencies();
  }, []);

  const closeModal = () => {
    setType('');
    handleClose();
  };
  return (
    <Modal open={open} onClose={closeModal}>
      <Modal.Content>
        <Wrapper>
          <Formiz connect={eventForm} onValidSubmit={save}>
            <form onSubmit={eventForm.submit}>
              <Wrapper textAlign='left'>
                <FormizDropdownInput
                  name='type'
                  label='Choose a type'
                  required
                  placeholder='type'
                  options={[
                    {
                      key: 1,
                      value: 'buy',
                      text: 'Buy',
                    },
                    {
                      key: 2,
                      value: 'sell',
                      text: 'Sell',
                    },
                  ]}
                  onChange={(value: any) => {
                    setType(value);
                  }}
                />
              </Wrapper>
              {type && (
                <Grid>
                  <Grid.Row columns='3'>
                    <Grid.Column>
                      <FormizDropdownInput
                        name='type'
                        label='Asset bought'
                        search
                        required
                        placeholder='type'
                        options={currencies.currencies.map((currency: any) => {
                          return {
                            key: currency.id,
                            text: currency.name,
                            value: currency.name,
                            image: { src: currency.slug },
                          };
                        })}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <FormizDropdownInput
                        name='type'
                        label='Asset sell'
                        search
                        required
                        placeholder='type'
                        options={currencies.currencies.map((currency: any) => {
                          return {
                            key: currency.id,
                            text: currency.name,
                            value: currency.name,
                            image: { src: currency.slug },
                          };
                        })}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <FormizSimpleInput
                        type='number'
                        name='quantity'
                        label='Quantity'
                        placeholder='Quantity'
                        required='Quantity is required'
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <FormizSimpleInput
                        type='number'
                        name='amount'
                        label='Amount'
                        placeholder='Amount'
                        required='Amount is required'
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <FormizDropdownInput
                        name='type'
                        label='Choose a exhange'
                        search
                        required
                        placeholder='type'
                        options={platforms.platforms.map((platform: any) => {
                          return {
                            key: platform.id,
                            text: platform.name,
                            value: platform.name,
                            image: { src: platform.slug },
                          };
                        })}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              )}
              <Spacer height='10px' />
              <Button size='large' type='submit' content='Submit' />
            </form>
          </Formiz>
        </Wrapper>
      </Modal.Content>
    </Modal>
  );
};

export default AddEvent;
