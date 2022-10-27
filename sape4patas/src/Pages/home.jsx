import { Deshboard } from "../Components/Deshboard";
import { Head } from "../Components/Header";
import { LojasParceiras } from "../Components/Lojas-Parceiras";
import { Container } from "./styled";

export const Home = () => {
  return (
    <>
      <Head />
      <Container>
        <Deshboard />
        <LojasParceiras />
      </Container>
    </>
  );
};
