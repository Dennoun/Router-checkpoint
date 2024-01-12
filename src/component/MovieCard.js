import React from "react";
import {
  Rating,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import"./MovieCard.css";

function MovieCard({ movieKey, movieTitle, movieImg, movieDescription, movieRating }) {
  return (
    <div>
      <Card className="container mt-6 w-96" id={movieKey}>
        <CardHeader floated={false} color="blue-gray" className="relative h-[500px]">
          <img src={movieImg} alt="movie poster" />
        </CardHeader>
        <CardBody>
          <div className="overlay">
            <div className="text">
              <Typography variant="h5" color="white" className="mb-2">
                {movieTitle}
              </Typography>
              <Typography>
                {movieDescription}
              </Typography>
            </div>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Rating value={movieRating} />
        </CardFooter>
      </Card>
    </div>
  );
}

export default MovieCard;
