import Hero from './components/Hero'

export default function Home() {
  return (
    <body className="min-h-screen font-sans bg-event-black_2">
      <main className="flex max-w-[1440px] min-h-screen mx-auto">
        <Hero />
      </main>
    </body>
  )
}
