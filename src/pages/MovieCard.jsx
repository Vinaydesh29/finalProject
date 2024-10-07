import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
function MovieCard(props) {
  const content = props.data;
  return (
    <>
      {content.map((content) => {
        return (
          <Card
            sx={{
              maxWidth: 345,
              padding: "10px",
              marginLeft: "10px",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            <CardActionArea key={content.id}>
              <CardMedia
                component="img"
                height="140"
                image="https://idolkart.com/cdn/shop/articles/Wife_of_Lord_Ganesha.jpg?v=1700210846&width=1500"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {content.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {content.email}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}
export default MovieCard;
