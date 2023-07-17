import * as yup from 'yup';

export const materialValidationSchema = yup.object().shape({
  name: yup.string().required(),
  quantity: yup.number().integer().required(),
  site_id: yup.string().nullable(),
});
