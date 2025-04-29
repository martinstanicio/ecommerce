import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { SimplifiedTag } from "./common";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & {
  tag: SimplifiedTag;
};

export default function TagCheckbox({ tag, className, ...props }: Props) {
  const { id, name } = tag;

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Checkbox id={id} className="size-5" />
      <Label htmlFor={id} className="text-md pl-3">
        {name}
      </Label>
    </div>
  );
}
