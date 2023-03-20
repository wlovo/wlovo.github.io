import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid className="App">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
