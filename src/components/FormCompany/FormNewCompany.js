import { Formik, Form, Field } from "formik";
import { SchemaNewCompany } from "./SchemaNewCompany";

import swal from 'sweetalert';
import "./formNewCompany.css";

const initialValues = {
  name: "",
  website: "",
};

export const FormNewCompany = ({ handleClose }) => {
  return (
    <div className="p-8 z-20">
      <h2>INSERT A NEW COMPANY</h2>
      <div className="h-2 w-12 bg-white mt-2 mb-4"></div>
      <Formik
        initialValues={initialValues}
        validationSchema={SchemaNewCompany}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          swal({
            title: 'Compañia añadido',
            icon: 'success',
            button: 'Aceptar',
            timer: '2000'
          })
        }}
      >
        {({ errors, touched }) => (
          <Form className="formNew">
            <Field name="name" className="inputForm" placeholder="Name" autocomplete="off" />
            {errors.name && touched.name ? <div className="errorForm">{errors.name}</div> : null}

            <Field name="website" className="inputForm" placeholder="website" autocomplete="off" />
            {errors.website && touched.website ? <div className="errorForm">{errors.website}</div> : null}

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
