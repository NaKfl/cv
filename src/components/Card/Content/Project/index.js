import classnames from "classnames";
import React, { Component } from "react";
import Title from "../../../Title";
import "./styles.scss";

const projects = [
  {
    name: "LIVE TUTOR",
    role: "Team leader - Breaking tasks, doing FE, BE, DevOps tasks",
    description: "A web app that connects tutors and students by video streaming",
    size: 6,
    stack:
      "ReactJS, ExpressJS, Socket.io, Styled-component, Redux toolkit, Saga, Docker, Jitsi, etc",
    link: "https://livetutor.live/",
  },
  {
    name: "NETLOVE CMS",
    role: "Team member - Doing FE tasks",
    description:
      "A web app that the admin can add, remove or update the content showing in the mobile application (KMS Technologies)",
    size: 10,
    stack: "ReactJS, Styled-component, Redux toolkit, Saga, etc",
    link: "http://netlove.com/",
  },
  {
    name: "NGUYEN HUU GIA TRI WEBSITE",
    role: "Owner",
    description:
      "A beautiful website (only FE) using react to introduce myself ^^",
    size: 1,
    stack: "ReactJS, HTML, CSS, Spring.io",
    link: "https://nakfl.github.io/cv/",
  },
  {
    name: "WEB APP HOTEL MANAGEMENT",
    role: "Team leader - Breaking tasks, doing both FE and BE tasks",
    description:
      "A web app online that hotel owners and managers can use to manage the operational and financial functions of their hotel",
    size: 3,
    stack: "ReactJS, ExpressJS, MySQL, AntDesign",
    link: "https://github.com/NaKfl/web-quan-ly-khach-san",
  },
];

class ContentProject extends Component {
  renderList = (projects) => {
    return projects.map((item, index, array) => {
      return (
        <div
          key={index}
          className={classnames("project__content__timeline__single", {
            project__content__timeline__head: index === 0,
            project__content__timeline__tail: index === array.length - 1,
          })}
        >
          <div className="project__content__timeline__single__info">
            <div>
              <i className="fa fa-code"></i>
              <h4>{item.name}</h4>
            </div>
            <div className="project__content__timeline__single__info__detail">
              <div className="project__content__timeline__single__info__detail__single">
                <strong>Role</strong>
                <span>{item.role}</span>
              </div>
              <div className="project__content__timeline__single__info__detail__single">
                <strong>Descrip</strong>
                <span>{item.description}</span>
              </div>
              <div className="project__content__timeline__single__info__detail__single">
                <strong>Team size</strong>
                <span>{`${item.size} member${item.size > 1 ? "s" : ""}`}</span>
              </div>
              <div className="project__content__timeline__single__info__detail__single">
                <strong>Tech stack</strong>
                <span>{item.stack}</span>
              </div>
              <div className="project__content__timeline__single__info__detail__single project__content__timeline__single__info__detail__link">
                <strong>
                  <a target="_blank" rel="noopener noreferrer" href={item.link}>
                    Go to Github
                    <i className="fa fa-long-arrow-alt-right"></i>
                  </a>
                </strong>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="project">
        <Title>Projects</Title>
        <div className="project__content">
          <div className="project__content__timeline">
            {this.renderList(projects)}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentProject;
