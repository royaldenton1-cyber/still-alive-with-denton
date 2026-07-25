export default function GetSupport() {
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="font-display text-3xl italic text-parchment">
        If it&apos;s too much right now
      </h1>
      <p className="mt-4 text-parchment/70">
        Talking to a real person helps. These are free, confidential, and
        available right now.
      </p>

      <div className="mt-8 space-y-4">
        <div className="rounded-lg border border-ember/30 bg-ember/5 p-5">
          <h2 className="font-medium text-parchment">
            988 Suicide &amp; Crisis Lifeline (US)
          </h2>
          <p className="mt-1 text-sm text-parchment/60">
            Call or text 988 — available 24/7
          </p>
        </div>
        <div className="rounded-lg border border-ember/30 bg-ember/5 p-5">
          <h2 className="font-medium text-parchment">Crisis Text Line</h2>
          <p className="mt-1 text-sm text-parchment/60">
            Text HOME to 741741 — available 24/7
          </p>
        </div>
        <div className="rounded-lg border border-slate/30 p-5">
          <h2 className="font-medium text-parchment">Outside the US</h2>
          <p className="mt-1 text-sm text-parchment/60">
            findahelpline.com lists local crisis lines by country.
          </p>
        </div>
      </div>

      <p className="mt-10 text-sm text-parchment/50">
        This page will stay a placeholder — swap in local/regional lines and
        a real backend hook (e.g. a click-to-call or live chat handoff)
        before launch.
      </p>
    </div>
  );
}
