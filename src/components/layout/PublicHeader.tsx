import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Logo from "../common/Logo";

const PublicHeader = ({
  onOptionSelect,
}: {
  onOptionSelect: (sectionId: string) => void;
}) => {
  const naviagate = useNavigate();

  const navigateToRegister = () => {
    naviagate("/register");
  };

  const navoOptions = [
    { option: "Features", link: "features" },
    { option: "Demo", link: "demo" },
    { option: "Pricing", link: "pricing" },
  ];

  return (
    <>
      <div className="hidden md:flex justify-between items-center p-3 fixed top-0 left-0 w-full z-50 bg-white">
        <Logo />

        <div className="flex items-center gap-2">
          {navoOptions.map((nav, index) => (
            <div
              key={index}
              onClick={() => onOptionSelect(nav.link)}
              className="px-4 py-2 text-gray-700 text-sm font-bold hover:text-blue-600 transition cursor-pointer"
            >
              {nav.option}
            </div>
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
