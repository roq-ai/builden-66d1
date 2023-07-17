import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  site_id: yup.string().nullable(),
  construction_worker_id: yup.string().nullable(),
});
