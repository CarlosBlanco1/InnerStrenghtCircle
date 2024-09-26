const NavBar = () => {
  return (
    <div className="flex bg-nav-green justify-items-center items-center">
      <div className="w-1/3">
        <img src="logo.png" alt="logo" className="w-20 h-20" />
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <h1 className="text-2xl font-zen">Inner Strength Circle</h1>
      </div>
      <div className="w-1/3 flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
