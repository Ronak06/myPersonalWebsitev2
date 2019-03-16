import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import scrollToComponent from "react-scroll-to-component";

export default class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={() =>
            scrollToComponent(this.refs.name, {
              offset: 1000,
              align: "top",
              duration: 1500
            })
          }
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="resume"
            active={activeItem === "resume"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="skills"
            active={activeItem === "skills"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
