import React, { Component } from "react";
import Title from "./../../../Title";
import "./styles.scss";

export default class ContentAbout extends Component {
  render() {
    return (
      <div className="about">
        <Title>About Me</Title>
        <div className="about__content">
          <div className="about__content__row">
            <div className="about__content__row__col">
              <p>
                I’m a hard-working web developer with a keen eye for detail, and
                a determination to deliver the very highest quality.
              </p>
              <p style={{ marginBottom: 0 }}>
                I take great pride in my work, and I always try to better myself
                with every project I work on.
              </p>
            </div>
            <div className="about__content__row__col about__content__row__info">
              <div>
                <strong>DOB</strong>
                <span>12/06/1999</span>
              </div>
              <div>
                <strong>Gender</strong>
                <span>Male</span>
              </div>
              {/* <div>
                <strong>Phone</strong>
                <span>0931467534</span>
              </div> */}
              <div>
                <strong>Address</strong>
                <span>Tan Binh, HCM</span>
              </div>
            </div>
          </div>
        </div>

        <Title>Education</Title>
        <div className="about__content">
          <div className="about__content__row">
            <div className="about__content__row__col about__content__row__university">
              <div className="about__content__row__university__name">
                <span>University of Science HCM</span>
              </div>
            </div>
            <div className="about__content__row__col about__content__row__info">
              <div>
                <strong>Major</strong>
                <span>Software Engineering</span>
              </div>
              <div>
                <strong>GPA</strong>
                <span>8.4/10 (Now)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
