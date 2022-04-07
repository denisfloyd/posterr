import { Loader } from "components/elements/Loader";
import { Container } from "./styles";

export const LoadingState: React.FC = () => {
  return (
    <Container>
      <Loader isActive />
    </Container>
  );
};
