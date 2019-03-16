import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import scrollToComponent from "react-scroll-to-component";

import "./Navigation.css";

export default class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary className="nav">
          <Menu.Item name="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item name="aboutme">
            <Link to="/">About Me</Link>
          </Menu.Item>
          <Menu.Item name="resume">
            <Link to="/">Resume</Link>
          </Menu.Item>
          <Menu.Item name="skills">
            <Link to="/">Skills</Link>
          </Menu.Item>
          <Menu.Item name="contact">
            <Link to="/">Contact</Link>
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}
