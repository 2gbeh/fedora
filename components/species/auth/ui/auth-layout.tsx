import React, { PropsWithChildren } from "react";
import { PageTitle } from "@/components/atoms/page-title";

interface Props extends PropsWithChildren {
  pageTitle?: string;
}

export const AuthLayout = ({ children, pageTitle }: Props) => {
  return (
    <div className="flex-centered p-6 md:p-10">
      <PageTitle title={pageTitle} />
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
};
