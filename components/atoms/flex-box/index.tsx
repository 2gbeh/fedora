import React, { PropsWithChildren } from "react";
import { View, FlexAlignType } from "react-native";

interface IProps extends PropsWithChildren {
  item?: FlexAlignType;
  content?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  end?: boolean;
}

const FlexBox: React.FC<IProps> = ({
  children,
  item = "center",
  content = "flex-start",
  end,
}) => {
  console.log("🚀 ~ FlexBox");
  // renders
  return (
    <View
      style={{
        flexDirection: "row",
        ...(end
          ? { alignSelf: "flex-end" }
          : { alignItems: item, justifyContent: content }),
      }}
    >
      {children}
    </View>
  );
};

export default React.memo(FlexBox);
