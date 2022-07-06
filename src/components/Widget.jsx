import Chart from "./Chart";
import "../assets/css/widget.css";

function Widget({ data, title, id }) {
  return (
    <div>
      <Chart data={data} title={title} aspect={2} id={id} />
    </div>
  );
}

export default Widget;
