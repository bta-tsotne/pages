import Logo from '../assets/images/house-regular-full.svg?react';
import "../assets/css/main.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    const cleanPath = path.replace(/^\/+/, "");
    if (cleanPath) {
      navigate(`/${cleanPath}`);
    }
  };

  return (
    <header className="bg-amber-800">
      <div className="d-wrapper flex items-center flex-col md:flex-row justify-between py-5 px-4">
        <Link to="/home" className="logo" aria-label="კომპანიის დასახელება">
          <Logo className='fill-amber-50 size-12' />
        </Link>
        <div className="nav-tools flex gap-4 items-center flex-col md:flex-row">
          <nav className="man-nav flex flex-col lg:flex-row gap-4 text-amber-100">
            <Link to="/about">ჩვენ შესახებ</Link>
            <Link to="/services/14">მომსახურება 14</Link>
            <Link to="/services/255">მომსახურება 15</Link>
            <Link to="/counter">მთვლელი</Link>
            <Link to="/timer-component">TimerComponent</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <button
            className="btn btn-golden"
            onClick={() => handleNavigate("dashboard")}
          >
            შესვლა
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleNavigate("dashboard")}
          >
            გამოსვლა
          </button>
        </div>
      </div>
    </header>
  );
}
