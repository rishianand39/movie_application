import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 onClick={()=>window.scroll(0,0)}>🎥The Movie App 🎥</h1>
    </div>
  );
};

export default Header;
