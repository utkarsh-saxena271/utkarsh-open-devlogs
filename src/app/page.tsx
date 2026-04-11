import Hero from "@/components/home-layout/hero";
import Container from "@/components/layout/container";



export default function HomePage() {
  return (
    <div className="min-h-screen min-w-screen bg-zinc-950">
      <Container>
        <Hero/>
      </Container>
    </div>
  )
}
// border-l border-r border-slate-600/30