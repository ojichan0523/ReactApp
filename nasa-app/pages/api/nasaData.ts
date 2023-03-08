import axios from "axios";

export default async function getData() {
  const res = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=wqdROxLNUpvnPhJMjOGQK3ycxLPq9z4p2UnM6rBN"
  );
  const data = await res.data;
  return data;
}
