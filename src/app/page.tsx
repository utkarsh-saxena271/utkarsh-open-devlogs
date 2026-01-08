import Hero from "@/components/Home/Hero"
import HowItWorks from "@/components/Home/HowItWorks"
import OpenSourceNote from "@/components/Home/OpenSourceNote"
import WhatIsThis from "@/components/Home/WhatIsThis"
import WhoIsThisFor from "@/components/Home/WhoIsThisFor"

export default function HomePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-12 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto border-l border-r border-slate-600/30 my-3">
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
