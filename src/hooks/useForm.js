import { useState, useEffect } from 'react';

const useForm = (initialValues, validators) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value });
  };

  useEffect(() => {
    const newErrors = {};
    Object.keys(values).forEach((key) => {
      if (validators[key]) {
        const error = validators[key](values[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });
    setErrors(newErrors);
  }, [values, validators]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      console.log('Formulario enviado:', values);
    }
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;