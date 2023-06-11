import "./Nav.css";
function Nav(props) {
  return (
    <div className="nav">
      <div className="title flexC">
        <h2>GEEKSTER</h2>
      </div>

      <div className="menu flexC">
        <a href="home">Home</a>
        <a href="homr">Profile</a>
        <a href="home">Products</a>
        <a href="contect">ContactUs</a>
      </div>
    </div>
  );
}

export default Nav;
