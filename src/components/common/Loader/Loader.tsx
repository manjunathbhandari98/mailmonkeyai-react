import { useLoaderDots } from "../../../hooks/useLoaderdots";
import "./Loader.css";

const Loader = () => {
  const totalDots = 8;
  const { isActive, isPrevious, getRotation } = useLoaderDots(totalDots);

  return (
    <div className="loader-overlay">
      <div className="loader-wrapper">
        <div className="loader-container">
          {/* Logo */}
          <div className="logo-container">
            <img src="/logo.png" alt="Loading..." className="loader-image" />
          </div>

          {/* Dots */}
          <div className="dots-container">
            {Array.from({ length: totalDots }).map((_, i) => (
              <div
                key={i}
                className="dot-wrapper"
                style={{
                  transform: `rotate(${getRotation(i)}deg) translate(0, -60px)`,
                }}
              >
                <div
                  className={`dot ${isActive(i) ? "active" : ""} ${
                    isPrevious(i) ? "previous" : ""
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
