const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <img
        src="/logo.png"
        alt="logo"
        className="w-7 h-7 md:w-12 md:h-12 drop-shadow-md"
      />

      <h2 className="text-lg md:text-2xl font-bold tracking-tight mt-2">
        <span className="text-blue-600">Mail</span>Monkey
        <span className="text-purple-700 text-sm">AI</span>
      </h2>
    </div>
  );
};

export default Logo;
