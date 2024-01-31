import { useState } from "react";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

const FirstScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dni: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleChangePage = (num) => {
    setCurrentPage(num);
  };

  const getCurrentPage = () => {
    if (currentPage === 0) {
      return (
        <FirstPage
          formData={formData}
          handleChange={handleChange}
          handleChangePage={handleChangePage}
        />
      );
    } else if (currentPage === 1) {
      return (
        <SecondPage
          formData={formData}
          handleChange={handleChange}
          handleChangePage={handleChangePage}
        />
      );
    } else {
      return <ThirdPage formData={formData} />;
    }
  };

  return (
    <div
      style={{
        width:"100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {getCurrentPage()}
    </div>
  );
};

export default FirstScreen;
