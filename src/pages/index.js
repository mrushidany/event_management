import Head from "next/head";

export default function Home() {
  return (
    <main className="flex w-full h-screen font-sans flex-col bg-event-black_2">
    <Head><title>Event Management System</title></Head>
    <section className="w-full h-auto bg-hero bg-cover bg-no-repeat">
      <div className="bg-hero_gradient h-full">
        <nav className="bg-hero_gradient w-full h-auto flex items-center flex-row justify-between py-[26px] px-[132px] border-0">
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
                <a className=" cursor-pointer">Home</a>
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
            <button className="w-36 h-12 rounded-[100px] bg-blue_gradient flex items-center justify-center text-event-black_3 font-bold leading-5">Register</button>
        </nav>
        <div className="w-full h-auto px-[132px] mt-[107px]">

        </div>
      </div>
    </section>
    
  </main>
  )
}
