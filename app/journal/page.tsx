export default function Journal() {
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="font-display text-3xl italic text-parchment">Journal</h1>
      <p className="mt-2 text-parchment/60">
        Private by default. Only you can read this.
      </p>

      <textarea
        placeholder="Start wherever you are..."
        rows={10}
        className="mt-8 w-full rounded-lg border border-slate/30 bg-nightlight p-4 text-sm text-parchment placeholder:text-parchment/30 focus:border-ember/50 focus:outline-none"
      />
      <button className="mt-4 rounded-lg bg-ember px-5 py-2.5 text-sm font-medium text-night transition hover:bg-ember/90">
        Save entry
      </button>
    </div>
  );
}
