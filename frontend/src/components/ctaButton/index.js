import { Link } from "react-router-dom";

function CtaButton({ path, title }) {
  return (
   <Link to={path} className="ctaButton">
    {title}
   </Link>
  );
}

export default CtaButton;