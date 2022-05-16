import "./main.css";

const Btn = ({ title, color, textcolor ,funcStat }) => {
  return (
    <button className="task__btn" onClick={funcStat} style={{ backgroundColor: color, color: textcolor }}>
      {title}
    </button>
  );
};

export default Btn;
