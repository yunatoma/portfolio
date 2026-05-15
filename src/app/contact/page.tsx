export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold">Contact</h1>

      <p className="mb-8 text-gray-600">
        お仕事のご相談やご連絡は、以下よりお願いいたします。
      </p>

      <div className="space-y-4">
        <a
          href="mailto:your-email@example.com"
          className="block rounded-xl border border-gray-200 p-5 hover:bg-gray-50"
        >
          your-email@example.com
        </a>

        <a
          href="https://github.com/your-name"
          target="_blank"
          rel="noreferrer"
          className="block rounded-xl border border-gray-200 p-5 hover:bg-gray-50"
        >
          GitHub
        </a>

        <a
          href="https://x.com/your-name"
          target="_blank"
          rel="noreferrer"
          className="block rounded-xl border border-gray-200 p-5 hover:bg-gray-50"
        >
          X
        </a>
      </div>
    </section>
  );
}