import { ToggleShemeButton } from "@/components/toggle-sheme-button/toggle-sheme-button";
import { useTheme } from "@/hooks/use-theme";
import { defaultPresets } from "@/lib/theme-presets";
import {
  ActionIcon,
  Flex,
  Group,
  Paper,
  Select,
  SelectProps,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { IconCopy, IconPalette } from "@tabler/icons-react";

const themes = Object.entries(defaultPresets).map(([key, value]) => key);

const renderSelectOption: SelectProps["renderOption"] = ({
  option,
  checked,
}) => (
  <Flex flex="1" gap="xs" justify={"space-between"}>
    {/* {checked && <IconCheck size={18} />} */}
    {option.label}

    <Group gap={"5"}>
      <Paper
        bg={defaultPresets[option.value].styles.light.primary}
        w={10}
        h={10}
        radius={"50%"}
      ></Paper>
      <Paper
        bg={defaultPresets[option.value].styles.light.foreground}
        w={10}
        h={10}
        radius={"50%"}
      ></Paper>
      <Paper
        bg={defaultPresets[option.value].styles.light.secondary}
        w={10}
        h={10}
        radius={"50%"}
      ></Paper>
    </Group>
  </Flex>
);

export function ThemeSelector() {
  const { switchTheme, themeObjectString } = useTheme();
    const clipboard = useClipboard({ timeout: 500 });

  function handleThemeChange(value: string | null) {
    if (!value) return;
    switchTheme(value);
  }

  return (
    <Flex align={"center"} justify={"center"} gap={"xs"}>
      <Select
        leftSection={<IconPalette size={18} />}
        placeholder="Select a theme"
        data={themes}
        onChange={handleThemeChange}
        searchable
        clearable
        renderOption={renderSelectOption}
        w={300}
      />
      <ToggleShemeButton />
      <ActionIcon
        variant="default"
        size="input-sm"
        aria-label="Alternar esquema de cores"
        onClick={() => clipboard.copy(themeObjectString || "")}
      >
        <IconCopy size={18} stroke={1.5} />
      </ActionIcon>
    </Flex>
  );
}
