import "./Header.css";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
function Header() {
  return (
    <header>
      <nav>
        <VideocamRoundedIcon style={{ color: "black", fontSize: "70px" }} />
        <h1>ENTERTAINMENT HUB</h1>
        <MovieRoundedIcon style={{ color: "black", fontSize: "70px" }} />
      </nav>
    </header>
  );
}
export default Header;
