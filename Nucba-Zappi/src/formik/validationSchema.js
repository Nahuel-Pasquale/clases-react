import * as Yup from 'yup';

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('Campo Requerido'),
  phone: Yup.string().required('Campo Requerido'),
  location: Yup.string().required('Campo Requerido'),
  address: Yup.string().required('Campo Requerido'),
})