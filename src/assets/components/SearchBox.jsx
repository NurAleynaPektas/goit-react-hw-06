import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";
import "../components/SearchBox.modules.css";
const SearchBox = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.filters.nameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <p>Find Contacts :</p>
      <input
        placeholder="Search by name..."
        className="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
