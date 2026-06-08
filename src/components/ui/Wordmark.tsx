import { site } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Brand wordmark. Reads `site.name` and highlights `site.accentWord`
 * in the brand accent colour. Reusable across clients — no hardcoded names.
 */
export function Wordmark({ className }: { className?: string }) {
  const { name, accentWord } = site;

  if (accentWord && name.includes(accentWord)) {
    const idx = name.lastIndexOf(accentWord);
    const before = name.slice(0, idx);
    const after = name.slice(idx + accentWord.length);
    return (
      <span className={cn("font-display", className)}>
        {before}
        <span className="text-gold">{accentWord}</span>
        {after}
      </span>
    );
  }

  return <span className={cn("font-display", className)}>{name}</span>;
}
