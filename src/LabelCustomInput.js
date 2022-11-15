const LabelCustomInput = (props) => {
  return (
    <g>
      <foreignObject x={props.x} y={props.y} width={50} height={20}>
        <div style={{ cursor: "pointer" }}>
          <input type="text" />
        </div>
      </foreignObject>
    </g>
  );
};

export default LabelCustomInput;
