import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { fetchImages } from "./api";
import "react-toastify/dist/ReactToastify.css";

const Body = () => {
  const urls = null;
  useEffect(() => {
    fetchImages("shiba").then((urls) => {
      console.log(urls);
    });
  }, []);
  return (
    <main>
      <section className="section">
        <div className="container">
          <a>{urls}</a>
        </div>
      </section>
    </main>
  );
};

export default Body;
