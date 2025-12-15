export default async function Home() {
  const data = await fetch('https://api.example.com/data');

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Sheikh Najam Malik</h1>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400">Aspiring AI Engineer</p>
          <p className="text-lg text-zinc-500 dark:text-zinc-500 mt-2">Final Year Student</p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">About</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Final year student passionate about artificial intelligence and machine learning.
            Focused on building intelligent systems and exploring cutting-edge AI technologies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'].map(skill => (
              <a href={`/skills/${skill}`} key={skill} className="px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg text-zinc-800 dark:text-zinc-200">
                {skill}
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Projects</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">AI Project 1</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Description of your AI project</p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">AI Project 2</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Description of your AI project</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Contact</h2>
          <div className="flex gap-4">
            <a href="mailto:mahin@example.com" className="text-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100">Email</a>
            <a href="https://github.com" className="text-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100">GitHub</a>
            <a href="https://linkedin.com" className="text-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100">LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  );
}
