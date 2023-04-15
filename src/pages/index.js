export default function Home() {
  return (
    <main className="flex w-full h-screen font-sans flex-col bg-event-black_2">
    <div className="bg-hero w-full h-auto py-[26px] px-[132px]">
      <nav className="w-full h-auto flex items-center flex-row justify-between">
          <div className="flex flex-row space-x-3">
             <div className="flex flex-col w-auto h-auto gap-y-0">
                <div className="rounded-[0.2px] transform rotate-[-90deg] bg-blue_gradient w-[2.5px] h-[11px]"></div>
                <div className="rounded-[0.2px] transform rotate-[-90deg] bg-blue_gradient w-[2.5px] h-[10px]"></div>
                <div className="rounded-[0.2px] transform rotate-[-90deg] bg-blue_gradient w-[2.5px] h-[11px]"></div>
             </div>
             <div className="w-auto h-[27px] font-semibold text-[38px] leading-7 bg-blue_gradient bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>ventu</div>
          </div>
          <ul className="flex flex-row gap-x-10 font-roboto text-base text-event-gray leading-[19px]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Speakers</a>
            </li>
            <li>
              <a>Ticket</a>
            </li>
            <li>
              <a>Schedule</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <button className="w-36 h-12 rounded-[100px] bg-blue_gradient flex items-center justify-center">Register</button>
      </nav>
    </div>
  </main>
  )
}
