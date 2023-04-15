export default function Home() {
  return (
    <main className="flex w-full h-screen font-sans flex-col bg-event-black_2">
    <div className="bg-hero w-full h-auto py-[26px] px-[132px]">
      <nav className="w-full h-auto flex items-center flex-row justify-between">
          <div className="flex flex-row">
             <div className="flex flex-col justify-center items-start p-0 w-[11px] h[15.5px]">
                <div className="rounded-[0.2px] rotate-[-90deg] bg-blue_gradient w-[2.5px] h-[11px]"></div>
                <div className="rounded-[0.2px] rotate-[-90deg] bg-blue_gradient w-[2.5px] h-[11px]"></div>
                <div className="rounded-[0.2px] rotate-[-90deg] bg-blue_gradient w-[2.5px] h-[11px]"></div>
             </div>
          </div>
      </nav>
    </div>
  </main>
  )
}
