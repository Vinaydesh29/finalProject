import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Badge from "@mui/material/Badge";
function MovieCard({ poster, title, date, vote, name, type }) {
  const formattedVote = vote ? vote.toFixed(1) : null;
  return (
    <Badge
      color="primary"
      badgeContent={formattedVote}
      sx={{
        marginTop: "20px",
        "& .MuiBadge-badge": { zIndex: 0 },
      }}
    >
      <Card
        sx={{
          maxWidth: 300,
          paddingTop: "10px",
          marginLeft: "20px",
          marginBottom: "20px",
          display: "inline-block",
          backgroundColor: "#282c37",
          transition: "background-color 0.3s ease, color 0.3s ease",
          "&:hover": {
            backgroundColor: "white",
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
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
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
              }}
            >
              <span
                style={{
                  marginLeft: "0px",
                  fontSize: "12px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {type === "tv" ? "TV Series" : "Movie"}
              </span>
              <span
                style={{
                  marginLeft: "70px",
                  fontSize: "12px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {date}
              </span>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Badge>
  );
}
export default MovieCard;
