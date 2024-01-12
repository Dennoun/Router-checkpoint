import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function MovieTrailer({ movies }) {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);
  console.log(id);
  return (
    <>
      <Card className="w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={movie.img}
            alt="card-poster"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            <div key={movie.id}>{movie.title}</div>
          </Typography>
          <div className="mb-2 w-80">
            <iframe
              width="560"
              height="315"
              src={movie.trailer}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Link to={`/`} className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Home Page
            </Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );
}

export default MovieTrailer;
