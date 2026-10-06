import { useState } from "react";
import { Check, ChevronsUpDown, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { value: "en", label: "English" }
];

export function LanguageSwitcher() {
  const [value, setValue] = useState("en");

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          className="h-6 px-2 text-xs text-white/80 hover:text-white hover:bg-white/10 rounded-none font-medium"
        >
          <Languages className="mr-1.5 size-3.5" />
          {languages.find((l) => l.value === value)?.label}
          <ChevronsUpDown className="ml-2 size-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[160px] rounded-none" align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            onClick={() => setValue(lang.value)}
            className="text-xs cursor-pointer"
          >
            <Check
              className={cn(
                "mr-2 size-3.5",
                value === lang.value ? "opacity-100" : "opacity-0"
              )}
            />
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
