import React from "react";
import { Link } from "react-router-dom";
import AboutContent from "../components/aboutContent/AboutContent";
import Paper from "../components/paper/Paper";
import Container from "../layout/Container";

const About = () => {
  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <AboutContent />
      </Container>
    </Paper>
  );
};

export default About;
