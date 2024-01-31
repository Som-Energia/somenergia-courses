import { useNavigate } from "react-router-dom";

const options = [
  { title: "Formulari", href: "/formulari" },
  { title: "Component", href: "/component" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h6>Cypress Course</h6>
      <div>
        <ul>
          {options.map((option) => (
            <li
              key={option.href}
              onClick={() => {
                navigate(option.href);
              }}
            >
              <h6>{option.title}</h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
