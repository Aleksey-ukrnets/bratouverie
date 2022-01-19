import React, { Component, useState } from 'react';
import { Box, Button, Card, CardContent, Grid } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import Pagination from './pagination';

export default class BookingForm extends Component {

  render() {
    return (
      <Card>
        <CardContent>
          <FormikStepper
            initialValues={{
              print: '',
              fullName: '',
              email: '',
              phone: '',
              instagram: '',
              country: '',
              region: '',
              town: '',
              street: '',
              house: '',
              room: '',
            }}
            onSubmit={(values) => {
              let myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              myHeaders.append("Authorization", "Token ac6627302b3e9d5bc649f50eedd48816131b5195");
              let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(values),
                redirect: 'follow'
              }
              fetch("https://api.checkbrand.com/api/customer/", requestOptions)
                .then(response => response.text())
                .then(result => {
                  const data = JSON.parse(result)
                  sessionStorage.setItem('id', data.id)
                  this.props.setModal(false)
                  this.props.setPhotoModal(true)
                })
                .catch(error => console.log('error', error));
            }}
          >
            <div>
              <p className='form__text'>Ваше Имя Фамилия для печати на футболке</p>
              <Box paddingBottom={2}>
                <Field fullWidth name='print' component={TextField} label={'Имя Фамилия'} />
              </Box>
            </div>
            <FormikStep
              validationSchema={Yup.object({
                email: Yup.string()
                  .email()
                  .required('Некорректно введен e-mail'),
                phone: Yup.number()
                  .positive("Номер не может иметь отрицательные значения")
                  .integer("Номер должен включать только целые числа")
                  .required('Номер телефона является обязательным')
              })}
            >
              <p className='form__text'>Заполните информацию , для
                связи получения товара</p>
              <Box paddingBottom={2}>
                <Field fullWidth name='fullName' component={TextField} label={'ФИО'} />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name='email' component={TextField} label={'E-mail*'} />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name='phone' component={TextField} label={'Телефон*'} />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name='instagram' component={TextField} label={'Instagram*'} />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name='country' component={TextField} label={'Страна'} />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name='region' component={TextField} label={'Регион'} />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name='town' component={TextField} label={'Город'} />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name='street' component={TextField} label={'Улица'} />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name='house' component={TextField} label={'Дом'} />
              </Box>
              <Box paddingBottom={2}>
                <Field fullWidth name='room' component={TextField} label={'Квартира'} />
              </Box>
            </FormikStep>
          </FormikStepper>
        </CardContent>
      </Card >
    )
  }
}

export function FormikStep({ children }) {
  return <>{children}</>
}

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children)

  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step]

  function isLastStep() {
    return step === childrenArray.length - 1
  }
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (value, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(value, helpers)
        } else {
          setStep(s => s + 1)
        }
      }}
    >
      <Form autoComplete='off'>
        {currentChild}
        <Grid container justifyContent="center" >
          <Button variant="contained" style={{
            borderRadius: 28,
            backgroundColor: "#ec1fc0",
            width: '260px',
            height: '55px',
            color: '#ffff',
            fontFamily: 'Gilroy Regular',
            fontSize: '16px',
            marginBottom: '30px'
          }} type='submit'>Продолжить</Button>
        </Grid>

        <Pagination step={step + 1} />
      </Form>
    </Formik >
  )
}


