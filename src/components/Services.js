import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free Cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae iste commodi possimus reprehenderit doloribus quaerat eligendi delectus quod debitis."
      },
      {
        icon: <FaHiking />,
        title: "Hiking Trails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae iste commodi possimus reprehenderit doloribus quaerat eligendi delectus quod debitis."
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttles",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae iste commodi possimus reprehenderit doloribus quaerat eligendi delectus quod debitis."
      },
      {
        icon: <FaBeer />,
        title: "great beers on tap",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae iste commodi possimus reprehenderit doloribus quaerat eligendi delectus quod debitis."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
