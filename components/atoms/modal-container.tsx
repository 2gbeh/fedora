import { PropsWithChildren } from "react";
import { Modal, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { COLOR } from "@/constants/COLOR";

interface Props extends PropsWithChildren {
  show?: boolean;
  onClose?: () => void;
  forceClose?: boolean;
  bottomSheet?: boolean;
}

export const ModalContainer = ({
  children,
  show,
  onClose,
  forceClose,
  bottomSheet,
}: Props) => {
  const handleClose = () => {
    if (!forceClose) onClose?.();
  };

  return (
    <Modal
      visible={show}
      onRequestClose={handleClose}
      animationType={bottomSheet ? "slide" : "fade"}
      transparent
    >
      <Pressable onPress={handleClose} style={sx(bottomSheet).overlay}>
        <Pressable
          onPress={(ev) => ev.stopPropagation()}
          style={sx(bottomSheet).container}
        >
          {bottomSheet ? (
            <TouchableOpacity style={sx().notch} onPress={handleClose} />
          ) : null}
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const sx = (bottomSheet?: boolean) =>
  StyleSheet.create({
    _: {},
    overlay: {
      backgroundColor: COLOR.overlay,
      alignItems: bottomSheet ? "stretch" : "center",
      justifyContent: bottomSheet ? "flex-end" : "center",
      flex: 1,
    },
    container: {
      backgroundColor: COLOR.white,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      paddingVertical: 16,
      paddingHorizontal: 16,
      ...(bottomSheet
        ? {}
        : {
            borderBottomRightRadius: 16,
            borderBottomLeftRadius: 16,
            width: "80%",
          }),
    },
    notch: {
      backgroundColor: COLOR.muted,
      borderRadius: 16,
      marginBottom: 16,
      width: 84,
      height: 6,
      alignSelf: "center",
    },
  });
