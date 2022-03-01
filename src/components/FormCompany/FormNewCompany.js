import { Formik, Form, Field } from "formik";
import { SchemaNewCompany } from "./SchemaNewCompany";
import './formNewCompany.css';

import { Modal } from '../Modal/Modal';

const initialValues = {
  name: "",
  website: "",
};

export const FormNewCompany = () => {
  return (
    <Modal >
    <h2>INSERT A NEW COMPANY</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={SchemaNewCompany}
      onSubmit={(values, {resetForm}) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="formNew">
          <Field name="name" className="inputForm" placeholder="Name"/>
          {errors.name && touched.name ? <div className="errorForm">{errors.name}</div> : null}

          <Field name="website" className="inputForm" placeholder="website"/>
          {errors.website && touched.website ? <div className="errorForm">{errors.website}</div> : null}

          <div>
            <button type="reset">Cancel</button>
            <button type="submit">Accept</button>
          </div>
        </Form>
      )}
    </Formik>
    </Modal>
  );
};
