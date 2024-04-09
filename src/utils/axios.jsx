import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGI3M2M1N2UzMmYxOGQ5YWQzYzYwMzkwZjdhYzI4OCIsInN1YiI6IjY2MGVjMTE2OWM5N2JkMDE3Y2E4OGZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qV02wCJ3IzEjwPmjNIvPaLbLpdBXtb0s5tTgH_Hleo0",
  },
}); 

export default instance;
