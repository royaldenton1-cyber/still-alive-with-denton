export default function Community() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="font-display text-3xl italic text-parchment">Community</h1>
      <p className="mt-2 text-parchment/60">
        Quiet threads. No follower counts, no performance.
      </p>

      <div className="mt-10 rounded-lg border border-dashed border-slate/30 p-8 text-center text-sm text-parchment/40">
        TODO: thread list pulled from /api/community
      </div>
    </div>
  );
}
