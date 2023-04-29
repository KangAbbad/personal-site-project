const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-block h-full w-full z-0 bg-light p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;