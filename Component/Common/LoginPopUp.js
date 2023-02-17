import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const LoginPopup = (props) => {
  const router = useRouter();
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         }
         if (!values.password) {
            errors.password = 'Required';
          }
         return errors;
       }}
       onSubmit={(values) => {
         if(values.email === "admin" && values.password === "123456"){ 
            localStorage.setItem("token","admintokenkey") 
            router.push("/dashboard")
            props.onHide()
         }
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <Form.Group className="mb-3">
              <Form.Label>Email{errors.password && touched.password ? <span style={{color:"red"}}>*</span> : <span>*</span>}</Form.Label>
              <Form.Control
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            <span className="error">{errors.email && touched.email && errors.email}</span>
            </Form.Group>
           <Form.Group className="mb-3">
              <Form.Label>Password{errors.password && touched.password ? <span style={{color:"red"}}>*</span> : <span>*</span>}</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            <span className="error">{errors.password && touched.password && errors.password}</span>
            </Form.Group>
           <Button variant="primary" type="submit" disabled={isSubmitting}>
             Login
           </Button>
         </form>
       )}  
     </Formik>
     </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginPopup;
