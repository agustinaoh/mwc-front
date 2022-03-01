import * as Yup from "yup";

export const SchemaNewFlight = Yup.object().shape({
  nameCompany: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required name company"),
  date: Yup.string().default(() => new Date()).required("Required date"),
  origenCountry: Yup.string().required("Required origen country"),
  destinyCountry: Yup.string().required("Required destiny country"),
  floats: Yup.number()
});