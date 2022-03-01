import { Formik, Form, Field } from "formik"
import { Modal } from "../Modal/Modal";
import { SchemaNewFlight } from "./SchemaFormFlight";


const initialValues = {
    nameCompany: "",
    date: Date.now(),
    // origenCountry: "",
    // destinyCountry: "",
    floats: 0
  };

export const FormNewFlight = () => {
  return (
        <Modal >
    <h2>INSERT A NEW COMPANY</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={SchemaNewFlight}
      onSubmit={(values, {resetForm}) => {
        console.log(values);
      }}
      >
      {({ errors, touched }) => (
        <Form className="formNew">
            <Field name="nameCompany" className="inputForm" placeholder="Name"/>
          {errors.nameCompany && touched.nameCompany ? <div className="errorForm">{errors.nameCompany}</div> : null}
          <Field name="date" className="inputForm" type="date"/>
          {errors.date && touched.date ? <div className="errorForm">{errors.date}</div> : null}
          <Field name="floats" className="inputForm" type="number" placeholder="floats"/>
          {errors.floats && touched.floats ? <div className="errorForm">{errors.floats}</div> : null}

          <div>
          <button type="reset">Cancel</button>
          <button type="submit">Accept</button>
          </div>

          </Form>
         )}
    </Formik>
    </Modal>
  )
}