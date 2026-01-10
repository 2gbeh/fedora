import React, { PropsWithChildren } from "react";

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex-centered p-6 md:p-10">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
};
