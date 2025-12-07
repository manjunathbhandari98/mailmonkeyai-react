import { Link } from "react-router-dom";
import Logo from "../common/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerOptions = [
    { title: "Privacy", link: "privacy" },
    { title: "Terms", link: "terms" },
    { title: "Contact", link: "contact" },
  ];

  return (
    <>
      <div className="mt-12 py-6 px-4">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-6">
            {footerOptions.map((option, idx) => (
              <Link
                to={option.link}
                key={idx}
                className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                {option.title}
              </Link>
            ))}
          </div>
        </div>

        <p className="text-gray-500 text-sm text-center py-6">
          © {currentYear} MailMonkey AI — All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
