import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Badge from "@mui/material/Badge";
import "./MovieCard.css";
function MovieCard({ poster, title, date, date2, vote, name, type }) {
  const formattedVote = vote ? vote.toFixed(1) : null;
  return (
    <Badge
      color="primary"
      badgeContent={formattedVote}
      sx={{
        marginTop: "20px",
        "& .MuiBadge-badge": {
          zIndex: 0,
          backgroundColor:
            formattedVote < 5
              ? "red"
              : formattedVote > 5 && formattedVote < 7
              ? "blue"
              : "green",
        },
      }}
    >
      <Card
        sx={{
          paddingTop: "10px",
          marginLeft: "20px",
          marginBottom: "20px",
          width: "200px",
          height: "350px",
          display: "inline-block",
          backgroundColor: "#282c37",
          transition: "background-color 0.3s ease, color 0.3s ease",
          "&:hover": {
            backgroundColor: "white",
            color: "black",
            "& .text": {
              color: "black",
            },
          },
        }}
      >
        <CardActionArea sx={{ maxWidth: 240, padding: 0 }}>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w300${poster}`}
            height="250px"
            maxWidth="200px"
            sx={{ objectFit: "contain" }}
          />
          <CardContent
            sx={{
              display: "flex",
              height: "80px",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography
              gutterBottom
              component="div"
              className="text"
              sx={{
                textAlign: "center",
                color: "white",
                transition: "color 0.3s ease",
              }}
            >
              {title || name}
            </Typography>
            <div
              style={{
                textAlign: "center",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {type === "tv" ? "TV Series" : "Movie"}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {date || date2}
              </span>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Badge>
  );
}
export default MovieCard;
