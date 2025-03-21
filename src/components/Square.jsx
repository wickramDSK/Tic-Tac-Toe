import crossIcon from "../assets/images/cross.svg";
import circleIcon from "../assets/images/circle.svg";
import "./Square.css";

export default function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value && (
        <img
          src={value === "X" ? crossIcon : circleIcon}
          alt={value}
          className="square-icon"
        />
      )}
    </button>
  );
}