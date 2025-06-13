import { Stack, Title } from "@mantine/core";
import { ColorPallete } from "../../components/colo-pallete/color-pallete";
import { TestComponensts } from "../../components/test-components/test-components";
import { ToggleShemeButton } from "../../components/toggle-sheme-button/toggle-sheme-button";

export function Home() {
  return (
    <Stack align="center" mt={"xl"} gap={"xl"}>
      <Title>Mantheming</Title>
      {/* <ColorPallete /> */}
      <ToggleShemeButton />
      <TestComponensts />
    </Stack>
  );
}
