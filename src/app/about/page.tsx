export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 px-6 pb-32 max-w-5xl mx-auto">
      <h1 className="text-5xl font-extralight tracking-widest mb-24 uppercase">
        About
      </h1>

      <div className="space-y-8">
        <p className="text-sm tracking-wider leading-relaxed text-gray-400">
          KARTj est un portfolio photographique explorant les frontières entre
          le visible et l&apos;invisible.
        </p>
        <p className="text-sm tracking-wider leading-relaxed text-gray-400">
          Chaque projet est une séquence d&apos;images, une narration visuelle
          qui se déploie dans le scroll, sans interruption, sans distraction.
        </p>
        <p className="text-sm tracking-wider leading-relaxed text-gray-400 pt-8">
          Contact: contact@kartj.com
        </p>
      </div>
    </main>
  );
}
