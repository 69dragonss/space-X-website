export const Filter = ({ onChange }) => {
  return (
    <div className="filter-wrapper">
      <select name="height" className="filter-height" onChange={onChange}>
        <option value="0">Select the height</option>
        <option value="100">More than 100ft</option>
        <option value="200">More than 200ft</option>
        <option value="300">More than 300ft</option>
        <option value="400">More than 400ft</option>
      </select>
    </div>
  );
};
