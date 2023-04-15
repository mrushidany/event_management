export default function Home() {
  return (
    <main className="flex w-full h-screen font-sans flex-col bg-event-black_2">
    <div className="bg-hero w-full h-auto py-[26px] px-[132px]">
      <nav className="w-full h-auto flex items-center flex-row justify-between">
          <div className="flex flex-row space-x-3 items-center">
             <div className="flex flex-col w-auto h-auto gap-y-0">
                <div className="rounded-[0.2px] transform rotate-[-90deg] bg-blue_gradient w-[2.5px] h-[11px]"></div>
                <div className="rounded-[0.2px] transform rotate-[-90deg] bg-blue_gradient w-[2.5px] h-[10px]"></div>
                <div className="rounded-[0.2px] transform rotate-[-90deg] bg-blue_gradient w-[2.5px] h-[11px]"></div>
             </div>
             <div className="w-auto font-semibold text-[28px] leading-7 bg-blue_gradient bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>ventu</div>
          </div>
      </nav>
    </div>
  </main>
  )
}
