import { Github } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Developer Website</h1>
        <p className="text-xl mb-8 max-w-md">
          Welcome to a developer website for</p>
        <p className="text-xl mb-8 max-w-md">
          Ayumi Nuguroho</p>
        <Link
          href="https://github.com/Ayu0317mi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-black text-white rounded-full p-3 hover:bg-gray-800 transition-colors"
        >
          <Github size={24} />
          <span className="sr-only">GitHub Profile</span>
        </Link>
      </main>
    </div>
  )
}