import Icon from "@/components/icon";
import { siteName } from "@/lib/metadata";

export default function Logo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Icon className="h-16" />
      <span className="text-5xl font-bold">{siteName}</span>
    </div>
  );
}
