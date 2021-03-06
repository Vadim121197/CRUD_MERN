import React from "react";

export const renderField = ({
  input,
  label,
  type,
  value,
  name,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        name={name}
        className="form-control"
      />
      {touched &&
        ((error && <span className="errors">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Пустое поле";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Некорректный email";
  }

  if (!values.password) {
    errors.password = "Пустое поле";
  } else if (values.password.length < 6) {
    errors.password = "Минимальная длина 6 символов";
  }
  if (values.confPass !== values.password) {
    errors.confPass = "Неверный пароль";
  }

  if (!values.name) {
    errors.name = "Пустое поле";
  }

  if (!values.price) {
    errors.price = "Пустое полe";
  } else if (isNaN(+values.price)) {
    errors.price = "Должно быть число";
  }

  return errors;
};
