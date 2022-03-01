import * as Yup from "yup";

export const SchemaNewFlight = Yup.object().shape({
  nameCompany: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  date: Yup.string().required("Required"),
  // origenCountry: Yup.string().required("Required"),
  // destinyCountry: Yup.string().required("Required"),
  floats: Yup.number()
});
