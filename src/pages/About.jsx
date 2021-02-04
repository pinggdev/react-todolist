import React from "react";
import { Link } from "react-router-dom";

import Paper from "../components/paper/Paper";
import Container from "../layout/Container";

const About = () => {
  return (
    <Paper>
      <Container
      // flexDirection="column"
      // justifyContent="space-between"
      // height="100%"
      />
      <h1>This is about page</h1>
      <Link to="/">Pergi ke halaman home</Link>
    </Paper>
  );
};

export default About;
