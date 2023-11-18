import { Link } from "react-router-dom";

export default function Nav (props){
  return (
    <div className="nav">
      <Link to="/dashboard">
        <div>Home</div>
      </Link>
      
      <Link to="/about">
        <div>About</div>
      </Link>
     
       
    </div>
  );
};