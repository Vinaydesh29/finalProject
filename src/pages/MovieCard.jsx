import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Badge from "@mui/material/Badge";
function MovieCard({ poster, title, date, vote, name, type }) {
  return (
    <Badge
      color="primary"
      badgeContent={vote}
      sx={{ position: "relative", top: "20px" }}
    >
      <Card
        sx={{
          maxWidth: 500,
          padding: "10px",
          marginLeft: "20px",
          marginBottom: "20px",
          display: "inline-block",
        }}
      >
        <CardActionArea sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w300${poster}`}
            height="250px"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title || name}
            </Typography>
            <span
              style={{
                marginLeft: "0px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {type === "tv" ? "TV Series" : "Movie"}
            </span>
            <span
              style={{
                marginLeft: "70px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {date}
            </span>
          </CardContent>
        </CardActionArea>
      </Card>
    </Badge>
  );
}
export default MovieCard;
