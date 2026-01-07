import Hero from "@/components/Home/Hero"
import HowItWorks from "@/components/Home/HowItWorks"
import OpenSourceNote from "@/components/Home/OpenSourceNote"
import WhatIsThis from "@/components/Home/WhatIsThis"
import WhoIsThisFor from "@/components/Home/WhoIsThisFor"

export default function HomePage() {
  return (
    <div className="px-6 py-12 max-w-220 mx-auto border-l border-r border-slate-600/30 my-3">
      {/* Hero */}
      <Hero/>

      {/* What is this Section */}
      <WhatIsThis/>

      {/* How it works Section */}
      <HowItWorks/>

      {/* Who is this for Section */}
      <WhoIsThisFor/>

      {/* Open Source Note */}
      <OpenSourceNote/>

    </div>
  )
}