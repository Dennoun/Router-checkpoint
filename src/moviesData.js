import { v4 as uuidv4 } from "uuid";

const moviesData = [
  {
    id: uuidv4(),
    title: "THE GENTELMEN",
    bio: "Gangester Movie",
    img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2019/11/the-gentlemen-poster-matthew-mcconaughey-405x600.jpg?q=50&fit=crop&dpr=1.5",
    stars: 4,
    trailer: "//www.youtube.com/embed/Ify9S7hj480?si=QIZVp9PpyUiAXBNt",
  },
  {
    id: uuidv4(),
    title: "Avengers: Endgame",
    bio: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.",
    img: "https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
    stars: 1,
    trailer: "//www.youtube.com/embed/TcMBFSGVi1c",
  },
  {
    id: uuidv4(),
    title: "Avengers: Infinity war",
    bio: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    img: "https://imageio.forbes.com/blogs-images/markhughes/files/2018/04/DOLBY-Exclusive-AVENGERS-INFINITY-WAR-poster-1-1200x1753.jpg?height=1038&width=711&fit=bounds",
    stars: 2,
    trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8",
  },
  {
    id: uuidv4(),
    title: "Luca",
    bio: "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.o",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSewCXU42yYgDQS37d0ktggJku4XoEe4CkJfO64aeMLc9fwBjjf",
    stars: 3,
    trailer: "https://www.youtube.com/embed/mYfJxlgR2jw",
  },

  {
    id: uuidv4(),
    title: "Stowaway",
    bio: "A stowaway on a mission to Mars sets off a series of unintended consequences.",
    img: "https://xl.movieposterdb.com/21_04/2020/9203694/xl_9203694_c2767283.jpg?v=2022-07-26%2000:24:40",
    stars: 4,
    trailer: "https://www.youtube.com/embed/A_apvQkWsVY",
  },
  {
    id: uuidv4(),
    title: "Mortal Kombat",
    bio: "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
    img: "https://xl.movieposterdb.com/21_02/2021/293429/xl_293429_8842fbcd.jpg?v=2023-03-22%2015:33:43",
    stars: 5,
    trailer: "https://www.youtube.com/embed/NYH2sLid0Zc",
  },
  {
    id: uuidv4(),
    title: "Spiral",
    bio: "A criminal mastermind unleashes a twisted form of justice in Spiral, the terrifying new chapter from the book of Saw.",
    img: "https://xl.movieposterdb.com/21_12/2019/9247314/xl_9247314_b5907e33.jpg?v=2021-12-05%2023:51:45",
    stars: 4,
    trailer: "https://www.youtube.com/embed/gzy6ORqE9IY",
  },
  {
    id: uuidv4(),
    title: "Friends: The Reunion",
    bio: "An unscripted Friends reunion special.",
    img: "https://xl.movieposterdb.com/21_06/1994/108778/xl_108778_2de8b356.jpg?v=2023-11-03%2013:10:54",
    stars: 2,
    trailer: "https://www.youtube.com/embed/HRXVQ77ehRQ",
  },
];

export default moviesData;
