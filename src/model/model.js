export var Get_request = {
  plataform: "",
  genre: "all",
  url: "",
  id_content: "",
  filtter_url: function () {
    if (this.genre.length > 0 && this.genre != "all") {
      this.url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${this.plataform}&category=${this.genre}&sort-by=release-date`;
    } else {
      this.url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${this.plataform}`;
    }
  },
  filtter_url_id: function () {
    this.url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id_content}`;
  },
  options: {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_SECRET_KEY,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  },
  fetch_request: function () {
    return new Promise((resolve, reject) => {
      //==============================================
      fetch(this.url, this.options)
        .then((response) => response.json())
        .then((response_1) => resolve(response_1));
      //==============================================
    });
  },
};

export var Op__storage = {
  fn_get: () => {
    try {
      return JSON.parse(localStorage.getItem("data"))["data"];
    } catch (error) {
      return [];
    }
  },
  fn_set: ({ data }) => {
    localStorage.setItem("data", JSON.stringify({ data }));
  },
};
