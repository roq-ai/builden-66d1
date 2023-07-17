import * as yup from 'yup';

export const siteValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
  site_manager_id: yup.string().nullable(),
});
