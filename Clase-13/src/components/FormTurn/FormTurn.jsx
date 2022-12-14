// import { Formik, useFormik } from "formik";
import { Formik } from "formik";
import React from "react";
import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";
import * as Yup from 'yup';

import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurnStyles";

const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required('Campo requerido'),
  surname: Yup.string().trim().required('Campo requerido'),
  date: Yup.date().required('Campo requerido'),
  age: Yup.number()
    .integer('Debe ser un numero entero')
    .moreThan(16, 'Sos menor')
    .lessThan(95, 'Deja de laburar, sos grande')
    .required('Campo requerido'),
  email: Yup.string()
    .email('Correo electronico invalido')
    .required('Campo requerido'),
  phone: Yup.string()
    .matches(phoneRegex, 'Numero de celular invalido'),
  comments: Yup.string().max(255, 'Maximo de 255 caracteres'),
})


const FormTurn = () => {
  // const { getFieldProps, handleSubmit, errors, touched } = useFormik({
  //   initialValues: {
  //     name: '',
  //     surname: '',
  //     date: '',
  //     age: '',
  //     email: '',
  //     phone: '',
  //     comments: '',
  //   },
  //   validationSchema,
  //   onSubmit: (values, { resetForm }) => {
  //     console.log({ values });
  //     resetForm();
  //   },
  // });

  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          date: '',
          age: '',
          email: '',
          phone: '',
          comments: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log({ values });
          resetForm();
        }}
        >
        {({ touched, errors }) => (
        <Form>
          <Input 
            label="Nombre" 
            name='name'
            type="text"
            isError={touched.name && errors.name}/>
          <Input 
            label="Apellido" 
            type="text"
            name='surname'
            isError={touched.surname && errors.surname}/>
          <Input 
            label="Fecha" 
            type="date"
            name='date'
            isError={touched.date && errors.date}/>
          <Input 
            label="Edad" 
            type="number"
            name='age'
            isError={touched.age && errors.age}/>
          <Input 
            label="Correo Electronico" 
            type="email"
            name='email'
            isError={touched.email && errors.email}/>
          <Input 
            label="Telefono" 
            type="tel"
            name='phone'
            isError={touched.phone && errors.phone}/>
          <TextAreaInput 
            label="¿Cómo escuchaste de nosotros?"
            name='comments'
            isError={touched.comments && errors.comments}/>
          <Submit/>
        </Form>)}
      </Formik>
      {/* <Form onSubmit={handleSubmit}>
        <Input 
          label="Nombre" 
          name='name'
          type="text"
          isError={touched.name && errors.name}
          {...getFieldProps('name')} />
        <Input 
          label="Apellido" 
          type="text"
          name='surname'
          isError={touched.surname && errors.surname}
          {...getFieldProps('surname')} />
        <Input 
          label="Fecha" 
          type="date"
          name='date'
          isError={touched.date && errors.date}
          {...getFieldProps('date')} />
        <Input 
          label="Edad" 
          type="number"
          name='age'
          isError={touched.age && errors.age}
          {...getFieldProps('age')} />
        <Input 
          label="Correo Electronico" 
          type="email"
          name='email'
          isError={touched.email && errors.email} 
          {...getFieldProps('email')}/>
        <Input 
          label="Telefono" 
          type="tel"
          name='phone'
          isError={touched.phone && errors.phone} 
          {...getFieldProps('phone')}/>
        <TextAreaInput 
          label="¿Cómo escuchaste de nosotros?"
          name='comments'
          isError={touched.comments && errors.comments}
          {...getFieldProps('comments')}/>
        <Submit/>
      </Form> */}
    </FormBox>
  );
};

export default FormTurn;
