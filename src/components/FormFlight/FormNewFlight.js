import { Formik, Form, Field } from "formik"
import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import { SchemaNewFlight } from "./SchemaFormFlight";


const initialValues = {
    nameCompany: "",
    date: Date.now(),
    origenCountry: [],
    destinyCountry: [],
    floats: 0
};

export const FormNewFlight = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    const getCountries = async() => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const allCountries = data.map((element) => {
        const { name: {common}, cca3 } = element;
        return { common, cca3 }
      })
      
      setCountries(allCountries);
    }
    getCountries()
  }, [])
  
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
          <Field name="origenCountry" className="inputForm" as="select">
            <option value="">Select a country</option>
            { countries.length > 0 && countries.map((element) => (
              <option value={element.cca3}>{element.common}</option>
            ))}
          </Field>
          <Field name="destinyCountry" className="inputForm" as="select">
            <option value="">Select a country</option>
            { countries.length > 0 && countries.map((element) => (
              <option value={element.cca3}>{element.common}</option>
            ))}
          </Field>

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