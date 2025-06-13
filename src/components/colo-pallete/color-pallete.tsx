import { Flex, Stack, Text, UnstyledButton } from "@mantine/core";

export function ColorPallete() {
  return (
    <Stack>
      <Text>Gray</Text>
      <Flex>
        <UnstyledButton miw={50} mih={50} bg={"gray.0"} />
        <UnstyledButton miw={50} mih={50} bg={"gray.1"} />
        <UnstyledButton miw={50} mih={50} bg={"gray.2"} />
        <UnstyledButton miw={50} mih={50} bg={"gray.3"} />
        <UnstyledButton miw={50} mih={50} bg={"gray.4"} />
        <UnstyledButton miw={50} mih={50} bg={"gray.5"} />
        <UnstyledButton miw={50} mih={50} bg={"gray.6"} />
        <UnstyledButton miw={50} mih={50} bg={"gray.7"} />
        <UnstyledButton miw={50} mih={50} bg={"gray.8"} />
        <UnstyledButton miw={50} mih={50} bg={"gray.9"} />
      </Flex>
      <Text>Dark</Text>
      <Flex>
        <UnstyledButton miw={50} mih={50} bg={"dark.0"} />
        <UnstyledButton miw={50} mih={50} bg={"dark.1"} />
        <UnstyledButton miw={50} mih={50} bg={"dark.2"} />
        <UnstyledButton miw={50} mih={50} bg={"dark.3"} />
        <UnstyledButton miw={50} mih={50} bg={"dark.4"} />
        <UnstyledButton miw={50} mih={50} bg={"dark.5"} />
        <UnstyledButton miw={50} mih={50} bg={"dark.6"} />
        <UnstyledButton miw={50} mih={50} bg={"dark.7"} />
        <UnstyledButton miw={50} mih={50} bg={"dark.8"} />
        <UnstyledButton miw={50} mih={50} bg={"dark.9"} />
      </Flex>
        <Text>Primary</Text>
      <Flex>
        <UnstyledButton miw={50} mih={50} bg={"primary.0"} />
        <UnstyledButton miw={50} mih={50} bg={"primary.1"} />
        <UnstyledButton miw={50} mih={50} bg={"primary.2"} />
        <UnstyledButton miw={50} mih={50} bg={"primary.3"} />
        <UnstyledButton miw={50} mih={50} bg={"primary.4"} />
        <UnstyledButton miw={50} mih={50} bg={"primary.5"} />
        <UnstyledButton miw={50} mih={50} bg={"primary.6"} />
        <UnstyledButton miw={50} mih={50} bg={"primary.7"} />
        <UnstyledButton miw={50} mih={50} bg={"primary.8"} />
        <UnstyledButton miw={50} mih={50} bg={"primary.9"} />
      </Flex>
    </Stack>
  );
}
