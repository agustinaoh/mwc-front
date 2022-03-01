import { Formik, Form, Field } from "formik";
import { Modal } from "../Modal/Modal";
import { SchemaNewFlight } from "./SchemaFormFlight";

const initialValues = {
  nameCompany: "",
  date: Date.now(),
  // origenCountry: "",
  // destinyCountry: "",
  floats: 0,
};

export const FormNewFlight = ({ handleClose }) => {
  return (
    <div className="p-8 z-20">
      <h2>INSERT A NEW FLIGHT</h2>
      <div className="h-2 w-12 bg-white mt-2 mb-4"></div>
      <Formik
        initialValues={initialValues}
        validationSchema={SchemaNewFlight}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="formNew">
            <Field name="nameCompany" className="inputForm" placeholder="Name" />
            {errors.nameCompany && touched.nameCompany ? <div className="errorForm">{errors.nameCompany}</div> : null}
            <Field name="date" className="inputForm" type="date" />
            {errors.date && touched.date ? <div className="errorForm">{errors.date}</div> : null}
            <Field name="floats" className="inputForm" type="number" placeholder="floats" />
            {errors.floats && touched.floats ? <div className="errorForm">{errors.floats}</div> : null}

            <div className="w-full flex justify-between items-center">
              <button type="reset" className="p-2 border-2 border-white w-full mr-2" onClick={handleClose}>
                Cancel
              </button>
              <button type="submit" className="p-2 bg-white border-2 border-white text-teal-dark uppercase w-full ml-2">
                Accept
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
