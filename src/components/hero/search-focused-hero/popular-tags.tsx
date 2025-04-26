import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import config from "@/payload.config";
import Link from "next/link";
import { getPayload } from "payload";

export default async function PopularTags({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const payload = await getPayload({ config });
  const response = await payload.find({
    collection: "tags",
    depth: 0,
    pagination: false,
    limit: 100,
    sort: "name",
    select: { createdAt: false, updatedAt: false },
  });

  const tags = response.docs
    .sort((a, b) => {
      const aCount = a.products?.docs?.length;
      const bCount = b.products?.docs?.length;

      return (bCount || 0) - (aCount || 0);
    })
    .slice(0, 4);

  return (
    <div
      className={cn("flex flex-wrap justify-center gap-2", className)}
      {...props}
    >
      {tags.map(({ id, name }) => (
        <Button variant="secondary" size="sm" key={id} asChild>
          <Link href={`/productos?tags=${encodeURIComponent(name)}`}>
            {name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
