import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

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
        >
          Home
        </Menu.Item>
        <Menu.Item
          name="skills"
          active={activeItem === "skills"}
          onClick={this.handleItemClick}
        >
          Skills
        </Menu.Item>
        <Menu.Item
          name="experience"
          active={activeItem === "experience"}
          onClick={this.handleItemClick}
        >
          Experience
        </Menu.Item>
      </Menu>
    );
  }
}
