import React, { PropsWithChildren } from "react";
import { Href, Link } from "expo-router";
//
import { useAppSelector } from "@/store/store.config";
import { selectTheme } from "@/store/theme/theme.slice";
import { typographyStyles } from "@/styles/typography.styles";
import { COLOR } from "@/constants/THEME";

interface IProps extends PropsWithChildren {
  href: Href;
  right?: boolean;
}

const Hyperlink: React.FC<IProps> = ({ children, href, right }) => {
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ Hyperlink");
  // RENDER
  return (
    <Link
      href={href}
      style={{
        ...typographyStyles.labelLarge,
        color: COLOR[theme].tertiary,
        alignSelf: right ? "flex-end" : "flex-start",
      }}
    >
      {children}
    </Link>
  );
};

export default React.memo(Hyperlink);
