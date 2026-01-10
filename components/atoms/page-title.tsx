import Head from "next/head";
import { APP } from "@/constants/APP";

interface Props {
  title?: string;
}

export const PageTitle = ({ title }: Props) => {
  return (
    <Head>
      <title>{title ? `${title} | ${APP.name}` : APP.name}</title>
    </Head>
  );
};
