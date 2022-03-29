import {
  Button,
  CardContent,
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SweetItem({ sweet }) {
  return (
    <Grid item xs="auto">
      <Card sx={{ width: 200 }}>
        <CardMedia
          component="img"
          height="140"
          image={sweet.image}
          alt="sweet"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {sweet.name}
          </Typography>
        </CardContent>
        <Link to={`/order/${sweet._id}`}>
          <Button style={{ width: "100%" }} variant="contained" size="small">
            order
          </Button>
        </Link>
      </Card>
    </Grid>

    // <div>
    //   <img src={sweet.image} alt={sweet.name} />
    //   <h1>{sweet.name}</h1>
    //   <h1>{sweet.description}</h1>
    //   <Button>Press me</Button>
    // </div>
  );
}

export default SweetItem;
