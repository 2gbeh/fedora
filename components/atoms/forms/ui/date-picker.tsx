import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
//
import { Button } from "@/components/shadcn/ui/button";
import { Calendar } from "@/components/shadcn/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popover";

interface Props {
  placeholder?: string;
}

export const DatePicker = ({ placeholder = "Pick a date" }: Props) => {
  const [date, setDate] = useState<Date>();
  //
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="w-[280px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
};
