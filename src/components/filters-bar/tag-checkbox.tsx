"use client";

import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { SimplifiedTag } from "@/lib/simplified-types";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type Props = React.ComponentProps<"div"> & {
  tag: SimplifiedTag;
};

export default function TagCheckbox({ tag, className, ...props }: Props) {
  const { id, slug, name } = tag;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isChecked, setIsChecked] = useState(
    searchParams.getAll("tags").includes(slug),
  );

  const handleCheckedChange = (checked: boolean) => {
    const newParams = new URLSearchParams(searchParams);

    const currentTagSlugs = searchParams.getAll("tags");
    const newTagSlugs = checked
      ? [...currentTagSlugs, slug]
      : currentTagSlugs.filter((t) => t !== slug);

    newParams.delete("tags");
    newTagSlugs.forEach((t) => newParams.append("tags", t));

    router.replace(`?${newParams.toString()}`);
    setIsChecked(checked);
  };

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Checkbox
        id={id}
        className="size-5"
        checked={isChecked}
        onCheckedChange={(checked) =>
          handleCheckedChange(typeof checked === "boolean" ? checked : false)
        }
      />
      <Label htmlFor={id} className="text-md pl-3">
        {name}
      </Label>
    </div>
  );
}
