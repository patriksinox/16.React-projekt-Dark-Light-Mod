import articles from "./data";
import Clanok from "./Clanok";
import { Container, Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import { TfiLightBulb } from "react-icons/tfi";

function App() {
  const [tema, setTema] = useState("light-theme");

  useEffect(() => {
    document.documentElement.classList.add(tema);
  }, [tema]);

  const zmenaTemy = () => {
    if (tema === "light-theme") {
      document.documentElement.classList.remove(tema);
      return setTema("dark-theme");
    }
    if (tema === "dark-theme") {
      document.documentElement.classList.remove(tema);
      return setTema("light-theme");
    }
  };

  return (
    <>
      <Container>
        <section>
          <h1 className="text-center mt-5 mb-5">Dark/Light Mód APP</h1>
          <div>
            <button className="btn" onClick={zmenaTemy}>
              {tema === "light-theme" ? `Dark mód` : "Light mód"}{" "}
              <TfiLightBulb />
            </button>
          </div>
        </section>
        <Row>
          <Col>
            {articles.map((clanok) => {
              return <Clanok key={clanok.id} {...clanok} />;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
