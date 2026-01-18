import { Skeleton } from "@/components/shadcn/ui/skeleton";

interface Props {
  className?: string;
}

const Avatar = ({ className }: Props) => {
  return (
    <Skeleton className={`size-9 rounded-full bg-secondary ${className}`} />
  );
};

const Card = ({ className }: Props) => {
  return (
    <Skeleton
      className={`h-[320px] rounded-xl border bg-secondary shadow ${className}`}
    />
  );
};

const Text = ({ className }: Props) => {
  return (
    <Skeleton
      className={`h-3 w-[100px] rounded-sm bg-secondary ${className}`}
    />
  );
};

export const SkeletonUI = {
  Avatar,
  Card,
  Text,
};
