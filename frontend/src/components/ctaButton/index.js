import React from 'react';
import { Link } from "react-router-dom";

const CtaButton = ({ path, title }) => {
  return (
   <Link to={path} className="ctaButton">
    {title}
   </Link>
  );
}

export default CtaButton;