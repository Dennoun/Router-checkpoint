import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ onAddMovie }) => {
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: "",
    bio: "",
    img: "",
    trailer: "",
    stars: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChangeSelect = (selectedOption) => {
    const selectedValue = parseInt(selectedOption, 10);
    setNewMovie((prevState) => ({
      ...prevState,
      stars: selectedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    console.log(newMovie);
    setNewMovie({
      id: uuidv4(),
      title: "",
      bio: "",
      img: "",
      trailer: "",
      stars: 1,
    });
    navigate('/');
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Add a Movie
      </Typography>

      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Title :
          </Typography>
          <Input
            size="lg"
            placeholder="Title"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            type="text"
            name="title"
            value={newMovie.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Bio:
          </Typography>
          <div className="w-96">
            <Textarea name="bio" value={newMovie.bio} onChange={handleChange} />
          </div>
        </div>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Poster URL:
          </Typography>
          <Input
            type="text"
            name="img"
            value={newMovie.img}
            onChange={handleChange}
            size="lg"
            placeholder="Poster url"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="mb-3">
            Rating :
          </Typography>

          <Select
            className="gap-6"
            name="stars"
            value={newMovie.stars}
            onChange={(selectedOption) => handleChangeSelect(selectedOption)}
          >
            {[1, 2, 3, 4, 5].map((number) => (
              <Option key={number} value={number}>
                {number}
              </Option>
            ))}
          </Select>
        </div>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Trailer URL:
          </Typography>
          <Input
            type="text"
            name="trailer"
            value={newMovie.trailer}
            onChange={handleChange}
          />
        </div>

        <Button className="mt-6" fullWidth type="submit">
          Add Movie
        </Button>
      </form>
    </Card>
  );
};

export default AddMovie;
