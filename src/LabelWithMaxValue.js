import { useState } from "react";

const LabelWithMaxValue = ({ x, y, value, data }) => {
  const [toggle, setToggle] = useState(true);
  const maxValue = Math.max(...data.map((item) => item.uv));
  const onClick = () => setToggle(false);
  return (
    <>
      {maxValue === value && toggle && (
        <g>
          <foreignObject x={x} y={y} width={50} height={20}>
            <div
              onClick={onClick}
              style={{ cursor: "pointer" }}
              className="maxValue"
            >
              {value}
            </div>
          </foreignObject>
        </g>
      )}
    </>
  );
};

export default LabelWithMaxValue;
