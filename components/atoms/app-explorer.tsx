import { useState } from "react";
import { useRouter } from "next/router";
import { startCase } from "lodash";
import { FolderIcon, FolderOpenIcon } from "lucide-react";
//
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { PATH } from "@/constants/PATH";
import { Url } from "next/dist/shared/lib/router/router";

export const AppExplorer = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex-center-center fixed right-4 bottom-4 h-8 w-8 rounded-md text-primary-foreground shadow-md transition-colors hover:bg-black/90 bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 z-[99]"
          aria-label="Explore"
        >
          {open ? <FolderOpenIcon size={14} /> : <FolderIcon size={14} />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="end">
        {Object.entries(PATH).map(([name, path]) => (
          <DropdownMenuItem key={name} onClick={() => router.push(path as Url)}>
            {startCase(name)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const renderIcon = (open?: boolean) => (
  <svg
    className={`h-4 w-4 transform transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"} `}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4v16m8-8H4"
    ></path>
  </svg>
);
