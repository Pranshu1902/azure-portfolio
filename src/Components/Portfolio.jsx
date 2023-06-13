/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Online Voting",
    description:
      "One shot platform to host elections and view results. Manage your voters, view live results, get result graphs and much more.",
    url: "https://github.com/Pranshu1902/Online-Voting",
  },
  {
    title: "The Gladden Project",
    description:
      "People are not comfortable in sharing their personal life with stranger over the phone, that's why we created this amazing chatbot which offers you the same experience without having you to worry about your confidentiality.",
    url: "https://github.com/Pranshu1902/The-Gladden-Project-fe/",
  },
  {
    title: "Bizz Card",
    description:
      "Create your digital identity today by using our simple and easy to use website to leave an amazing first impression. Created this project as a team for a hackathon.",
    url: "https://github.com/Pranshu1902/Bizz-Card-fe/",
  },
  {
    title: "Books World",
    description:
      "One place to manage all the books you ever read. Get detailed analysis on the book you read, all comments on your books to track your records.",
    url: "https://github.com/Pranshu1902/Books-World-fe/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
