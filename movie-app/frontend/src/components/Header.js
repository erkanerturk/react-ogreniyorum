import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Image, Menu, Visibility } from 'semantic-ui-react';
import { menuStyle, fixedMenuStyle } from '../helpers/styleHelper';

class Header extends Component {
  state = {
    menuFixed: null,
  };

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickTopMenu = () => this.setState({ menuFixed: null });

  render() {
    const { menuFixed } = this.state;
    return (
      <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
              </Menu.Item>
              <Menu.Item header as={Link} to="/" exact="true">
                Movie App
              </Menu.Item>
              <Menu.Item as={NavLink} to="/movies" exact>
                Movies
              </Menu.Item>
              <Menu.Item as={NavLink} to="/movie/add" exact>
                Add New Movie
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}

export default Header;
