import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">
        still alive with denton
      </p>
      <h1 className="mt-4 font-display text-4xl italic leading-tight text-parchment md:text-5xl">
        Some days the only proof
        <br />
        is a sentence you wrote down.
      </h1>
      <p className="mt-6 max-w-md text-parchment/70">
        A place to put words to what you&apos;re carrying — in a poem, a
        journal entry, or just a few lines to someone who&apos;ll read them.
        Nothing here needs to be finished, or good. It just needs to be yours.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/journal"
          className="rounded-lg bg-ember px-5 py-3 text-sm font-medium text-night transition hover:bg-ember/90"
        >
          Start writing
        </Link>
        <Link
          href="/quiet-corner"
          className="rounded-lg border border-sage/40 px-5 py-3 text-sm font-medium text-sage transition hover:bg-sage/10"
        >
          I just need a minute
        </Link>
      </div>

      <div className="mt-16 grid gap-6 border-t border-slate/20 pt-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg text-parchment">Poetry</h2>
          <p className="mt-2 text-sm text-parchment/60">
            Read and share pieces from people writing their way through it.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-parchment">Community</h2>
          <p className="mt-2 text-sm text-parchment/60">
            Quiet threads. No follower counts, no performance.
          </p>
        </div>
      </div>
    </div>
  );
}
