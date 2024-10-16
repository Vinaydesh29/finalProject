import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div class="foot">
        <WhatshotRoundedIcon
          style={{
            fontSize: "25px",
            position: "relative",
            top: "9px",
            left: "10px",
            bottom: "0px",
          }}
        />
        <br />
        <span>
          <Link to="/"> Trending</Link>
        </span>
      </div>
      <div class="foot">
        <MovieCreationRoundedIcon
          style={{
            fontSize: "25px",
            position: "relative",
            top: "9px",
            left: "7px",
            bottom: "0px",
          }}
        />
        <br />
        <span>
          <Link to="/Movies">Movies</Link>
        </span>
      </div>
      <div class="foot">
        <TvRoundedIcon
          style={{
            fontSize: "25px",
            position: "relative",
            top: "9px",
            left: "12px",
            bottom: "0px",
          }}
        />
        <br />
        <span>
          <Link to="/TvSeries">TV Series</Link>
        </span>
      </div>
      <div class="foot">
        <SearchRoundedIcon
          style={{
            fontSize: "25px",
            position: "relative",
            top: "9px",
            left: "5px",
            bottom: "0px",
          }}
        />
        <br />
        <span>
          <Link to="/Search">Search</Link>
        </span>
      </div>
    </footer>
  );
}
export default Footer;
