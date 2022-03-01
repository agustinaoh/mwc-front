import * as Yup from "yup";

export const SchemaNewCompany = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  website: Yup.string().url().nullable()
});
