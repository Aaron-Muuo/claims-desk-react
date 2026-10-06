import { useState } from "react";
import { Check, ChevronsUpDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCurrency, CURRENCIES, type CurrencyCode } from "@/lib/currency";

export function CurrencySwitcher() {
  const [open, setOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  return (
    <Popover modal={false} open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="h-6 px-2 text-xs text-white/80 hover:text-white hover:bg-white/10 rounded-none"
        >
          <Globe className="mr-1.5 size-3.5" />
          {currency ? CURRENCIES.find((c) => c.value === currency)?.value.toUpperCase() : "Select currency"}
          <ChevronsUpDown className="ml-2 size-3 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0 rounded-none" align="end">
        <Command>
          <CommandInput placeholder="Search currency or country..." className="h-9 text-xs" />
          <CommandList>
            <CommandEmpty className="p-2 text-xs text-center text-muted-foreground">No currency found.</CommandEmpty>
            <CommandGroup>
              {CURRENCIES.map((c) => (
                <CommandItem
                  key={c.value}
                  value={c.label + " " + c.country}
                  onSelect={() => {
                    setCurrency(c.value as CurrencyCode);
                    setOpen(false);
                  }}
                  className="text-xs"
                >
                  <Check
                    className={cn(
                      "mr-2 size-3.5",
                      currency === c.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {c.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
