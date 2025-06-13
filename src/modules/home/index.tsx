import { ColorPallete } from "@/components/colo-pallete/color-pallete";
import { Anchor, Stack, Text, Title } from "@mantine/core";
import { TestComponensts } from "../../components/test-components/test-components";
import { ThemeSelector } from "../theme-selector";

export function Home() {
  return (
    <Stack align="center" mt={"xl"} gap={"xl"}>
      <Title>Mantine Tweaker</Title>

      <ThemeSelector />
      <Stack maw={"600"} align="center">
        <Text c="dimmed">
          This is an experimental project inspired by{" "}
          <Anchor href="https://mantinehub.com/" target="_blank">
            MantineHub
          </Anchor>
          <Anchor href="https://tweakcn.com/" target="_blank">
            tweakcn
          </Anchor>
          , and other Mantine theme editors. However, it follows a different
          approach it overlays the colors used by Mantine itself.
        </Text>
        <Text c="dimmed">
          Note that some themes may not be fully functional and may require
          manual adjustments. This project is still a work in progress, and in
          the future, it may be able to copy the Mantine createTheme object.
        </Text>
        <Text c="primary.5" ta={"center"} size="sm" maw={"300"}>
          All themes are provided by tweakcn
        </Text>
        <Anchor href="https://github.com/NunoLima10/mantine-tweaker/" target="_blank">
          GitHub Repo
        </Anchor>
      </Stack>
      <ColorPallete />
      <TestComponensts />
    </Stack>
  );
}
