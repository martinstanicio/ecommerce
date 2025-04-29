import TagCheckbox from "./tag-checkbox";
import { SimplifiedTag } from "@/lib/simplified-types";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & {
  tags: SimplifiedTag[];
};

export default function TagsList({ tags, className, ...props }: Props) {
  return (
    <div className={cn("space-y-6", className)} {...props}>
      {tags.map((tag) => (
        <TagCheckbox key={tag.id} tag={tag} />
      ))}
    </div>
  );
}
