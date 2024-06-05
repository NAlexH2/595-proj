const ButtonToggle = ({
  handleClick1,
  handleClick2,
}: {
  handleClick1: React.MouseEventHandler<HTMLButtonElement>;
  handleClick2: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="flex justify-center">
      <button
        className="bg-cyan-600 hover:bg-cyan-800 text-cyan-50 font-bold py-2 px-4 m-3 rounded"
        onClick={handleClick1}
      >
        Series
      </button>
      <button
        className="bg-cyan-600 hover:bg-cyan-800 text-cyan-50 font-bold py-2 px-4 m-3 rounded"
        onClick={handleClick2}
      >
        Movies
      </button>
    </div>
  );
};

export default ButtonToggle;
