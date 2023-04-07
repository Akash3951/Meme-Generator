import "../App.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="title">
        <img
          src={process.env.PUBLIC_URL + `/images/meme-logo.jpg`}
          alt="meme-logo"
          className="header-logo"
        />
        <h2 className="header-title">Meme Generator</h2>
      </div>
      <div className="course-info">React Course - Project 3</div>
    </nav>
  );
}
