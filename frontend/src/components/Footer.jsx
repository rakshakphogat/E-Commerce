import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Forever is your trusted destination for premium fashion and
            lifestyle products. We&apos;re committed to delivering exceptional
            quality, unbeatable value, and outstanding customer service that
            keeps you coming back for more.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link
                to="/"
                className="hover:text-black transition-colors cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-black transition-colors cursor-pointer"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="hover:text-black transition-colors cursor-pointer"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-black transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-345-7890</li>
            <li>
              <a
                href="mailto:contact@forever.com"
                className="hover:text-black transition-colors cursor-pointer"
              >
                contact@forever.com
              </a>
            </li>
            <li>
              <a
                href="https://e-commerce-1p4u.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors cursor-pointer text-blue-600"
              >
                Admin Panel
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ forever.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
