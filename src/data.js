const Movies = [
  {
    title: "jurrasic world",
    description: "a world filled with hungry dinosaurs",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/6/6e/Jurassic_World_poster.jpg",
    rating: "5",
    id: "1",
    video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fb5ELWi-ekk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },

  {
    title: "avengers",
    description: "team up with the avengers to save the earth",
    posterURL:
      "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg",
    rating: "4",
    id: "2",
    video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6ZfuNTqbHE8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    title: "spider-man2",
    description: "a movie for the game",
    posterURL:
      "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg",
    rating: "3",
    id: "3",
    video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/I68XeHhf73E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
];

export default Movies;
