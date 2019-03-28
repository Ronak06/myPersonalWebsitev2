import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
//import scrollToComponent from "react-scroll-to-component";

import "./Navigation.css";

export default class Header extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted pointing secondary fixed="top" size="massive">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="skills"
          active={activeItem === "skills"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="experience"
          active={activeItem === "experience"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="contact"
          active={activeItem === "contact"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
