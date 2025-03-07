import Icon from "./icon";
import { siteName } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export default function Brand({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-4 flex-wrap",
        className,
      )}
      {...props}
    >
      <Icon className="h-16" />
      <span className="text-5xl font-bold">{siteName}</span>
    </div>
  );
}
