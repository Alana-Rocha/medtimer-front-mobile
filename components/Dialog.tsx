import * as React from "react";
import { Dialog, Portal, Text } from "react-native-paper";

type DialogProps = {
  label: string;
  visible: boolean;
  onDismiss: () => void;
};

const DialogToast = ({ label, visible, onDismiss }: DialogProps) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Content>
          <Text variant="bodyMedium">{label}</Text>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default DialogToast;
