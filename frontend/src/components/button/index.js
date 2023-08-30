import React from 'react';

const Button = ({ title, theme, onClick }) => {

  let themes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    success: "btn-success",
    danger: "btn-danger",
  }

  return (
   <button type="button" className={`btn ${theme ? themes[theme]: ""}`} onClick={onClick}>{title}</button> 
  );
}

export default Button;