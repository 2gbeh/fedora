import React, { PropsWithChildren } from "react";
//
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { PageTitle } from "@/components/atoms/page-title";

interface Props extends PropsWithChildren {
  pageTitle?: string;
  h1: string;
  p?: string;
}

export const AuthLayout = ({ children, pageTitle, h1, p }: Props) => {
  return (
    <>
      <PageTitle title={pageTitle} />
      <div className="flex-centered p-6 md:p-10">
        <main className="w-full max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle>{h1}</CardTitle>
              {p ? <CardDescription>{p}</CardDescription> : null}
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>
        </main>
      </div>
    </>
  );
};