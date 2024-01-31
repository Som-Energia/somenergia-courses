import PropTypes from "prop-types";

const FirstScreen = ({ formData, handleChange, handleChangePage }) => {
  const { name, phone } = formData;

  return (
    <div>
      <h2>First Screen</h2>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="text"
            value={phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </label>
        <br />
        <button onClick={() => handleChangePage(1)}>Siguiente</button>
      </form>
    </div>
  );
};

FirstScreen.propTypes = {
  formData: PropTypes.object,
  handleChange: PropTypes.func,
  handleChangePage: PropTypes.func,
};

export default FirstScreen;
