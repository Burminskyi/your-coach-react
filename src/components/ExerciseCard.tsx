import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ExerciseCard({ data }) {
  const { name, gifUrl, id } = data;
  return (
    
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={gifUrl}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: 'auto' }}>
        <Button size="small">Share</Button>
        <Link
          to={{
            pathname: `/exercises/${name}/${id}`,
            state: { data },
          }}
          style={{ textDecoration: "none" }}
        >
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
