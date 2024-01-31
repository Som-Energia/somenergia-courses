import PropTypes from "prop-types";

const SecondScreen = ({ formData }) => {
  const { phone, name, dni } = formData;

  return (
    <div>
      <h2>Third Screen</h2>
      <h3>Nom</h3>
      <p> {name} </p>
      <h3>Telefon</h3>
      <p> {phone} </p>
      <h3>DNI</h3>
      <p>{dni}</p>
    </div>
  );
};

SecondScreen.propTypes = {
  formData: PropTypes.object
};

export default SecondScreen;
