import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface IProps{
  openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({openCreateForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item>
          <img src="assets/logo.png" alt="logo" />
        </Menu.Item>
        <Menu.Item name="Reactivities" />
        <Menu.Item>
          <Button onClick={openCreateForm} positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
