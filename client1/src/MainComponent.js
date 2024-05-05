import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./MainComponent.css";

const MainComponent = () => {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState("");

  const getAllNumbers = useCallback(async () => {
    const response = await axios.get("/api/values/all");
    setValues(response.data.rows.map((row) => row.number));
  }, []);

  const saveNumber = useCallback(
    async (event) => {
      event.preventDefault();
      await axios.post("/api/values", { value });
      setValue("");
      getAllNumbers();
    },
    [value, getAllNumbers]
  );

  useEffect(() => {
    getAllNumbers();
  }, [getAllNumbers]);

  return (
    <div>
      <button onClick={getAllNumbers}>get all numbers</button>
      <br />
      <span className="title">values </span>
      <div className="values">
        {values.map((value) => (
          <div key={value} className="value">
            {value}
          </div>
        ))}
      </div>

      <form className="form" onSubmit={saveNumber}>
        <label> Enter your value: </label>
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};
export default MainComponent;
