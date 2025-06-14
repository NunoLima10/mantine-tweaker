import { Button, Modal, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function ModalButton() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <TextInput label="Input label" description="Input description" />
        <TextInput label="Input label" description="Input description" />
        <TextInput label="Input label" description="Input description" />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
