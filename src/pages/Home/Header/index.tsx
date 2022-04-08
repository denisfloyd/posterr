import { Banner, Container, Content } from "./styles";

import { Button } from "components/elements/Button";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <h4>P</h4>
          <Link to={`/post`}>
            <Button>New Posterr</Button>
          </Link>
        </Content>
      </Container>
      <Banner>Posterr</Banner>
    </>
  );
};
