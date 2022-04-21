import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/portfolio1.PNG";
import IMG2 from "../../assests/portfolio2.PNG";
import IMG3 from "../../assests/portfolio3.png";
import IMG4 from "../../assests/portfolio4.jpeg";
import IMG5 from "../../assests/portfolio5.JPG";
import IMG6 from "../../assests/portfolio6.jpg";

const data = [
  {
    id: 2,
    image: IMG2,
    title: "twitter Clone",
    github: "https://github.com/Lord-Constantine/twitter-clone-yt",
    demo: "https://twitter-clone-ochre-gamma.vercel.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "HULU Clone (Movie Listing)",
    github: "https://github.com/Lord-Constantine/hulu-clone-yt",
    demo: "https://hulu-clone-yt-drab.vercel.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Netflix Clone",
    github: "https://github.com/Lord-Constantine/Netflix-clone",
    demo: "https://netflix-clone-smoky-five.vercel.app",
  },
  {
    id: 5,
    image: IMG1,
    title: "React Order Meals",
    github: "https://github.com/Lord-Constantine/React-meals",
    demo: "https://react-meals-murex.vercel.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Phone Ecommerce page",
    github: "https://github.com/Lord-Constantine/Phone-EcommerceShop",
    demo: "https://phone-ecommerce-shop.vercel.app",
  },
  {
    id: 1,
    image: IMG5,
    title: "Facebook Clone",
    github: "https://github.com/Lord-Constantine/facebook-clone",
    demo: "https://facebook-clone-beryl.vercel.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
