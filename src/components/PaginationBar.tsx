const PaginationBar = () => {
  return (
    <div className="mt-8 space-x-4 font-bold text-secondary">
      <button>
        <span className="icon-[ep--arrow-left-bold]"></span>
      </button>

      <button className="rounded-full bg-secondary px-2 text-background">
        1
      </button>
      <button>2</button>
      <button>3</button>
      <span>...</span>
      <button>10</button>

      <button>
        <span className="icon-[ep--arrow-right-bold]"></span>
      </button>
    </div>
  );
};

export default PaginationBar;
