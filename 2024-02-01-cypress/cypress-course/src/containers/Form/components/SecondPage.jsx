import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const SecondScreen = ({ formData, handleChange, handleChangePage }) => {
  const { dni } = formData;

  return (
    <div>
      <h2>Second Screen</h2>
      <form>
        <label>
          DNI:
          <input type="text" value={dni} onChange={(e) => handleChange('dni', e.target.value)} />
        </label>
        <br />
        <button onClick={() => handleChangePage(2)}>Siguiente</button>
        <Link to="/">Menu</Link>
      </form>
    </div>
  );
};

SecondScreen.propTypes = {
    formData: PropTypes.object,
    handleChange: PropTypes.func,
    handleChangePage: PropTypes.func
}

export default SecondScreen;