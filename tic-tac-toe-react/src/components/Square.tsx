interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  const btnClass = () => {
    if (value === "X") return "cursor-pointer square text-red-500";
    if (value === "O") return "cursor-pointer square text-green-500";
    return "cursor-pointer square";
  };
  return (
    <div>
      <button className={btnClass()} onClick={onSquareClick}>
        {value}
      </button>
    </div>
  );
};

export default Square;
