import {
  Badge,
  Button,
  Chip,
  Divider,
  Fieldset,
  Flex,
  Menu,
  NavLink,
  Notification,
  Paper,
  Skeleton,
  Stack,
  Tabs,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import {
  IconActivity,
  IconArrowsLeftRight,
  IconChevronRight,
  IconCircleOff,
  IconGauge,
  IconHome,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";
import { ModalButton } from "../modal-button/modal-button";

export function TestComponensts() {
  return (
    <>
      <Divider my="md" />
      <Flex wrap={"wrap"} justify={"center"} gap={"lg"}>
        <Text maw={400}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore
          voluptas vitae error velit, modi exercitationem dolor, distinctio
          saepe molestias quidem voluptatem. Harum asperiores sapiente accusamus
          provident expedita magni voluptatibus!
        </Text>
        <Text c={"dimmed"} maw={400}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore
          voluptas vitae error velit, modi exercitationem dolor, distinctio
          saepe molestias quidem voluptatem. Harum asperiores sapiente accusamus
          provident expedita magni voluptatibus!
        </Text>
      </Flex>
      <Flex wrap={"wrap"} justify={"center"} gap={"lg"}>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button>Toggle menu</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item leftSection={<IconSettings size={14} />}>
              Settings
            </Menu.Item>
            <Menu.Item leftSection={<IconMessageCircle size={14} />}>
              Messages
            </Menu.Item>
            <Menu.Item leftSection={<IconPhoto size={14} />}>Gallery</Menu.Item>
            <Menu.Item
              leftSection={<IconSearch size={14} />}
              rightSection={
                <Text size="xs" c="dimmed">
                  ⌘K
                </Text>
              }
            >
              Search
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item leftSection={<IconArrowsLeftRight size={14} />}>
              Transfer my data
            </Menu.Item>
            <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
              Delete my account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <ModalButton />
      </Flex>
      <Notification title="We notify you that">
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
      <Flex wrap={"wrap"} justify={"center"} gap={"lg"}>
        <Button>Button</Button>
        <Button variant="light">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="subtle">Button</Button>
        <Button variant="transparent">Button</Button>
        <Button variant="white">Button</Button>
        <Button variant="gradient">Button</Button>
        <Button disabled>Button</Button>
      </Flex>
      <Flex wrap={"wrap"} justify={"center"} gap={"lg"}>
        <Button size="compact-sm">Button</Button>
        <Button variant="light" size="compact-sm">
          Button
        </Button>
        <Button variant="outline" size="compact-sm">
          Button
        </Button>
        <Button variant="subtle" size="compact-sm">
          Button
        </Button>
        <Button variant="transparent" size="compact-sm">
          Button
        </Button>
        <Button variant="white" size="compact-sm">
          Button
        </Button>
        <Button variant="gradient" size="compact-sm">
          Button
        </Button>
        <Button disabled size="compact-sm">
          Button
        </Button>
      </Flex>

      <Flex wrap={"wrap"} justify={"center"} gap={"lg"}>
        <Chip defaultChecked>Awesome chip</Chip>
        <Chip defaultChecked variant="light">
          Awesome chip
        </Chip>
        <Chip defaultChecked variant="outline">
          Awesome chip
        </Chip>
      </Flex>
      <Flex wrap={"wrap"} justify={"center"} gap={"lg"}>
        <Fieldset legend="Personal information" w={400}>
          <TextInput label="Your name" placeholder="Your name" />
          <TextInput label="Email" placeholder="Email" mt="md" />
          <TextInput label="Error" placeholder="Error" error={"Some erro"} />
        </Fieldset>
        <Stack>
          <NavLink
            href="#required-for-focus"
            label="With icon"
            leftSection={<IconHome size={16} stroke={1.5} />}
            w={400}
          />
          <NavLink
            href="#required-for-focus"
            label="With right section"
            leftSection={<IconGauge size={16} stroke={1.5} />}
            rightSection={
              <IconChevronRight
                size={12}
                stroke={1.5}
                className="mantine-rotate-rtl"
              />
            }
            w={400}
          />
          <NavLink
            href="#required-for-focus"
            label="Disabled"
            leftSection={<IconCircleOff size={16} stroke={1.5} />}
            disabled
            w={400}
          />
          <NavLink
            href="#required-for-focus"
            label="With description"
            description="Additional information"
            leftSection={
              <Badge size="xs" color="red" circle>
                3
              </Badge>
            }
            w={400}
          />
          <NavLink
            label="Active subtle"
            leftSection={<IconActivity size={16} stroke={1.5} />}
            rightSection={
              <IconChevronRight
                size={12}
                stroke={1.5}
                className="mantine-rotate-rtl"
              />
            }
            variant="subtle"
            active
            w={400}
          />
          <NavLink
            href="#required-for-focus"
            label="Active light"
            leftSection={<IconActivity size={16} stroke={1.5} />}
            rightSection={
              <IconChevronRight
                size={12}
                stroke={1.5}
                className="mantine-rotate-rtl"
              />
            }
            active
            w={400}
          />
          <NavLink
            href="#required-for-focus"
            label="Active filled"
            leftSection={<IconActivity size={16} stroke={1.5} />}
            rightSection={
              <IconChevronRight
                size={12}
                stroke={1.5}
                className="mantine-rotate-rtl"
              />
            }
            variant="filled"
            active
            w={400}
          />
        </Stack>
      </Flex>
      <Tabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
            Gallery
          </Tabs.Tab>
          <Tabs.Tab
            value="messages"
            leftSection={<IconMessageCircle size={12} />}
          >
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" leftSection={<IconSettings size={12} />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
      <Stack w={400}>
        <Skeleton height={50} circle mb="xl" />
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </Stack>
      <Tooltip label="Tooltip">
        <Button>Button with tooltip</Button>
      </Tooltip>

      <Paper shadow="xs" p="xl">
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that
          require background with shadow
        </Text>
      </Paper>
    </>
  );
}
