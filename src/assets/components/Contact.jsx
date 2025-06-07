import PropTypes from "prop-types";
import "../components/ContactList.modules.css";

export default function ContactListItem({ id, name, number, onDelete }) {
  return (
    <li className="contact-item" key={id}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button
        style={{
          backgroundColor: "red",
          color: "white",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          padding: "5px 10px",
        }}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { ContactListItem };
