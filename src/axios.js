import axios from "axios";

const common_instances = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default common_instances;
