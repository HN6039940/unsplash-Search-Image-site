import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useUnsplashContext } from "../context/Unsplash.context";
import customAxios from "../axios/customAxios";
const Gallery = () => {
  const { searchTerm } = useUnsplashContext();

  const fetchImages = async () => {
    const result = await customAxios.get(
      `photos?client_id=${
        import.meta.env.VITE_API_KEY
      }&page=1&query=${searchTerm}`
    );
    return result.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: fetchImages,
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h2>Loading...</h2>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h2>Error...</h2>
      </section>
    );
  }

  if (data.results.length < 1) {
    return (
      <section className="image-container">
        <h2>No images found...</h2>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.results.map((item) => {
        const {
          id,
          urls: { regular },
          alt_description,
          likes,
          links: { download },
        } = item;
        return (
          <img src={regular} alt={alt_description} key={id} className="img" />
        );
      })}
    </section>
  );
};

export default Gallery;
