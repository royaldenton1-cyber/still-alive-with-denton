export default function AIStill() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center py-10 text-center">
      <div className="pulse-ring h-16 w-16">
        <span className="relative z-10 h-10 w-10 rounded-full bg-ember/80" />
      </div>
      <h1 className="mt-6 font-display text-2xl italic text-parchment">Still</h1>
      <p className="mt-2 text-sm text-parchment/60">
        A companion for when writing alone feels like too much. Still isn&apos;t
        a therapist — just here to listen and ask a gentle question back.
      </p>

      <div className="mt-10 w-full rounded-lg border border-slate/30 bg-nightlight p-4 text-left text-sm text-parchment/40">
        Chat interface goes here.
      </div>
    </div>
  );
}
