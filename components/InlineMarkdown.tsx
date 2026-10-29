import Link from 'next/link';

// Renders the small Markdown subset used in resume.json prose:
// **bold** and [text](url). Internal links use next/link, external ones a new tab.
export default function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  return (
    <>
      {parts.map((part, index) => {
        const bold = part.match(/^\*\*(.+)\*\*$/);
        if (bold) return <strong key={index}>{bold[1]}</strong>;

        const link = part.match(/^\[(.+)\]\((.+)\)$/);
        if (link) {
          const [, label, href] = link;
          return href.startsWith('/') ? (
            <Link key={index} href={href}>
              {label}
            </Link>
          ) : (
            <a key={index} href={href} target="_blank">
              {label}
            </a>
          );
        }

        return part;
      })}
    </>
  );
}
