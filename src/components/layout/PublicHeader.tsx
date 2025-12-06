import { Link } from "react-router-dom";
import Button from "../common/Button";
import Logo from "../common/Logo";

const PublicHeader = () => {
  const navigateToRegister = () => {};

  const navoOptions = [
    { option: "Features", link: "#features" },
    { option: "Demo", link: "#demo" },
    { option: "Pricing", link: "#pricing" },
  ];

  return (
    <>
      <div className="hidden md:flex justify-between items-center p-3 fixed top-0 left-0 w-full z-50 bg-white">
        <Logo />

        <div className="flex items-center gap-2">
          {navoOptions.map((nav, index) => (
            <Link
              key={index}
              to="/"
              className="px-4 py-2 text-gray-700 text-sm font-bold hover:text-blue-600 transition cursor-pointer"
            >
              {nav.option}
            </Link>
          ))}

          <Link
            to="/login"
            className="px-4 py-2 text-gray-700 text-sm font-bold hover:text-blue-600 transition cursor-pointer"
          >
            Login
          </Link>

          <Button
            label="Get Started"
            onClick={navigateToRegister}
            customClass="!px-4 !py-2 !text-sm"
          />
        </div>
      </div>
    </>
  );
};

export default PublicHeader;
