export default function QuietCorner() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-16 text-center">
      <div className="pulse-ring h-24 w-24">
        <span className="relative z-10 h-16 w-16 rounded-full bg-sage/80" />
      </div>

      <h1 className="mt-10 font-display text-2xl italic text-parchment">
        You don&apos;t have to do anything here.
      </h1>
      <p className="mt-4 text-sm text-parchment/60">
        Breathe in as it grows. Breathe out as it settles. Stay as long as
        you want.
      </p>

      <p className="mt-12 font-mono text-xs text-slate">
        no tracking, no timer, no exit prompt
      </p>
    </div>
  );
}
