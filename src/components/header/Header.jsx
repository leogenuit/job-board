import "./header.css";
const Header = ({ title }) => {
  return (
    <div className="margin-bottom bg-gray height">
      <h1 className="center white">{title}</h1>
    </div>
  );
};

export default Header;
