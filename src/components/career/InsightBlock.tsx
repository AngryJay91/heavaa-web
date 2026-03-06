interface InsightBlockProps {
  insights: string[];
}

export default function InsightBlock({ insights }: InsightBlockProps) {
  return (
    <div className="mt-6 border-l-4 border-[var(--accent)] pl-4 space-y-2">
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-3">
        💡 Insights / Growth
      </p>
      {insights.map((insight, i) => (
        <p key={i} className="text-sm text-[var(--muted)] italic leading-relaxed">
          "{insight}"
        </p>
      ))}
    </div>
  );
}
