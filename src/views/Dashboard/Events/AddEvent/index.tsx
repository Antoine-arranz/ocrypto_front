import { Formiz, useForm } from '@formiz/core';
import React, { useEffect, useState } from 'react';
import FormizSimpleInput from '../../../../components/Formiz';
import Spacer from '../../../../components/Spacer';
import Wrapper from '../../../../components/Wrapper';
import Button from '../../../../components/Button';
import { Grid, Modal } from 'semantic-ui-react';
import FormizDropdownInput from '../../../../components/Formiz/FormizDropdownInput';

const AddEvent: React.FC<any> = ({
  open,
  handleClose,
  currentWalletId,
  getPlatforms,
  platforms,
  getCurrencies,
  currencies,
  addEvent,
}) => {
  const [type, setType] = useState<any>('');
  const eventForm = useForm();
  const save = (value: any) => {
    addEvent({ params: currentWalletId, data: value });
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
              <Spacer height='20px' />
              {type && (
                <Grid>
                  <Grid.Row columns='2'>
                    <Grid.Column>
                      <FormizDropdownInput
                        name='currencyBougth'
                        label='currencyBougth'
                        search
                        required
                        placeholder='Asset'
                        options={currencies.currencies.map((currency: any) => {
                          return {
                            key: currency.id,
                            text: currency.name,
                            value: currency.id,
                            image: { src: currency.slug },
                          };
                        })}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <FormizSimpleInput
                        type='number'
                        name='quantityBought'
                        label='Quantity Bought'
                        placeholder='Quantity'
                        required='Quantity Bought is required'
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns='2'>
                    <Grid.Column>
                      <FormizDropdownInput
                        name='currencySell'
                        label='Currency Sell'
                        search
                        required
                        placeholder='Asset'
                        options={currencies.currencies.map((currency: any) => {
                          return {
                            key: currency.id,
                            text: currency.name,
                            value: currency.id,
                            image: { src: currency.slug },
                          };
                        })}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <FormizSimpleInput
                        type='number'
                        name='quantitySell'
                        label='Quantity Sell'
                        placeholder='Quantity'
                        required='Quantity Sell is required'
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns='2'>
                    <Grid.Column>
                      <FormizSimpleInput
                        type='number'
                        name='amountBought'
                        label='Amount Bought'
                        placeholder='Amount Bought'
                        required='Amount Bought is required'
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <FormizSimpleInput
                        type='number'
                        name='amountSell'
                        label='Amount Sell'
                        placeholder='Amount Sell'
                        required='Amount Sell is required'
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns='2'>
                    <Grid.Column>
                      <FormizSimpleInput
                        type='number'
                        name='fees'
                        label='Fees'
                        placeholder='Fees'
                      />
                    </Grid.Column>

                    <Grid.Column>
                      <FormizSimpleInput
                        type='date'
                        name='date'
                        label='Date'
                        placeholder='Date'
                        required='Date is required'
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns='1'>
                    <Grid.Column>
                      <FormizDropdownInput
                        name='platformId'
                        label='Choose a exhange'
                        search
                        required
                        placeholder='exhange'
                        options={platforms.platforms.map((platform: any) => {
                          return {
                            key: platform.id,
                            text: platform.name,
                            value: platform.id,
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
