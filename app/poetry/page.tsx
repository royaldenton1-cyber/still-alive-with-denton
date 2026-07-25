const placeholderPoems = [
  { id: "1", title: "still, alive", author: "denton", excerpt: "some days the only proof is a sentence you wrote down..." },
];

export default function Poetry() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="font-display text-3xl italic text-parchment">Poetry</h1>
      <p className="mt-2 text-parchment/60">
        Pieces shared by people writing their way through it.
      </p>

      <div className="mt-10 space-y-6">
        {placeholderPoems.map((poem) => (
          <article
            key={poem.id}
            className="border-b border-slate/20 pb-6"
          >
            <h2 className="font-display text-xl text-parchment">{poem.title}</h2>
            <p className="mt-1 font-mono text-xs text-slate">by {poem.author}</p>
            <p className="mt-3 text-sm text-parchment/70">{poem.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
