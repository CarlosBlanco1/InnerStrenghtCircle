const DailyQuote = () => {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-blue-300 to-purple-700 min-h-screen items-center gap-8 font-zen">
        <div className="mt-10">
          <h1 className="text-5xl">Today's Daily Quote</h1>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-plant-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M2 9a10 10 0 1 0 20 0" />
            <path d="M12 19a10 10 0 0 1 10 -10" />
            <path d="M2 9a10 10 0 0 1 10 10" />
            <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
            <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
          </svg>
        </div>
        <div>
          <h3 className="text-3xl">"The only way to do great work is to love what you do."</h3>
          <h4 className="text-2xl">— Steve Jobs</h4>
        </div>
      </div>
    </>
  );
};

export default DailyQuote;
