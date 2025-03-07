import Icon from "@/components/icon";
import { siteName } from "@/lib/metadata";

export default function Logo() {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      <Icon className="h-16" />
      <span className="text-5xl font-bold">{siteName}</span>
    </div>
  );
}
