import Link from "next/link";
import { styled } from "../styles";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

const Button = styled("button", {
  backgroundColor: "$green300",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua{" "}
        <strong>Camiseta Beyong</strong> the Limits já está a caminho da sua
        casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
