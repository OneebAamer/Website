
function Header() {
  return (
    <header>
      <div className="logo">
        <img src="./logo.png" width="50" height="50"/>
      </div>
      <div className="navMenu">
        <nav>
          <ul id="horizontal-list">
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Projects">Projects</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
