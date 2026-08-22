import { COLOR } from "@/constants/COLOR";
import { textStyles } from "@/styles/text-styles";

export const formStyles = {
  _: {},
  fieldContainer: {
    gap: 4,
  },
  inputContainer: {},
  input: {
    color: COLOR.primary,
    backgroundColor: COLOR.background,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 44,
    ...textStyles.input,
  },
};
