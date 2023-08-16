import { BackgroundImage, Button, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrandReact, Home } from "tabler-icons-react";

export function Inicio() {
  const navigate = useNavigate();
  const handleClickAcessar = () => {
    navigate("/Pokedex");
  };
  return (
    <Stack spacing="0px" h="100vh">
      <Group position="apart" spacing="xs" bg="#DC143C" px="16px">
        <Text size={48}>Pokedex</Text>

        <Group position="apart" spacing="xs" px="20px">
          <Text size={37}>Emanuel Dev</Text>
          <BrandReact size={48} strokeWidth={2} color={"black"} />
        </Group>
      </Group>
      <BackgroundImage
        src="https://pbs.twimg.com/media/FNVg8aPacAAmccP.jpg"
        h="95vh"
      >
        <Stack align="center" spacing="lg" my="100px">
          <Text size={70}>Bem vindo a Pokedex React</Text>
          <Button
            onClick={handleClickAcessar}
            variant="gradient"
            gradient={{ from: "#FF2400", to: "#8B0000" }}
          >
            Acessar
          </Button>
        </Stack>
      </BackgroundImage>
    </Stack>
  );
}
