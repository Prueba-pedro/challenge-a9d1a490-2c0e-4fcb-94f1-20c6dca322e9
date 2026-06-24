import React from 'react';
import { useForm } from '../hooks/useForm';
import { emailValidator, passwordValidator } from '../validations';
import { formStyles } from '../styles/formStyles';
import { formUtils } from '../utils/formUtils';

const UserForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    password: '',
    role: ''
  }, {
    email: emailValidator,
    password: passwordValidator
  });

  return (
    <form onSubmit={handleSubmit} style={formStyles.form}>
      <div style={formStyles.formGroup}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          style={formStyles.input}
        />
        {errors.name && <p style={formStyles.error}>{errors.name}</p>}
      </div>
      <div style={formStyles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          style={formStyles.input}
        />
        {errors.email && <p style={formStyles.error}>{errors.email}</p>}
      </div>
      <div style={formStyles.formGroup}>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          style={formStyles.input}
        />
        {errors.password && <p style={formStyles.error}>{errors.password}</p>}
      </div>
      <div style={formStyles.formGroup}>
        <label htmlFor="role">Rol:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={values.role}
          onChange={handleChange}
          style={formStyles.input}
        />
        {errors.role && <p style={formStyles.error}>{errors.role}</p>}
      </div>
      <button type="submit" style={formStyles.button}>Enviar</button>
    </form>
  );
};

export default UserForm;