import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tag } from "@/payload-types";
import Link from "next/link";

type Props = React.ComponentProps<"div"> & {
  tags: Tag[];
};

export default function PopularTagsList({ tags, className, ...props }: Props) {
  return (
    <div
      className={cn("flex flex-wrap justify-center gap-2", className)}
      {...props}
    >
      {tags.map(({ id, slug, name }) => (
        <Button variant="secondary" size="sm" key={id} asChild>
          <Link href={`/productos?tags=${encodeURIComponent(slug)}`}>
            {name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
