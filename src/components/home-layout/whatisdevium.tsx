import Link from "next/link";

export default function WhatIsDevium() {
    return (
        <div className="w-full h-fit flex flex-col justify-center items-center gap-12">
            {/* main heading */}
            <h1 className="text-zinc-50 font-bold text-3xl lg:text-4xl flex flex-col md:flex-row items-center md:items-end justify-center gap-1">What is Devium? <span className="text-zinc-300/80 font-thin text-sm md:text-lg xl:text-xl text-center"> Everything you need to learn, build and grow as a developer.</span></h1>

            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 px-10">
                {/* block 1 */}
                <Link href='/devlogs' className="col-span-1 rounded-2xl border border-neutral-400/40 hover:border-neutral-300/50 py-3 transition-all duration-150 ease-in-out group">
                    <div className="w-full p-10 flex items-center justify-center mask-x-from-80% mask-x-to-95% mask-y-from-90% mask-y-to-100%"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 0.5px 0.5px, rgba(163, 154, 159, 0.35) 0.5px, transparent 0)',
                            backgroundSize: "8px 8px",
                            backgroundRepeat: "repeat "
                        }}
                    >
                        <div className="h-40 w-64 border border-neutral-800 bg-neutral-950 p-3 rounded-lg shadow-md group-hover:shadow-2xl group-hover:shadow-zinc-600 transition-all duration-150 ease-in-out">
                            {/* Header */}
                            <div className="h-4 w-3/4 bg-neutral-600 mb-2 rounded"></div>

                            {/* Image placeholder */}
                            <div className="h-16 w-full bg-neutral-900 mb-2 rounded"></div>

                            {/* Text lines */}
                            <div className="h-3 w-full bg-neutral-600 mb-1 rounded"></div>
                            <div className="h-3 w-5/6 bg-neutral-600 mb-1 rounded"></div>
                            <div className="h-3 w-2/3 bg-neutral-600 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-col item-start justify-center gap-2 px-3">
                        <h1 className="text-xl font-bold text-zinc-50">Real Developer Experience</h1>
                        <p className="text-base font-thin text-zinc-300/80">Devlogs covering real learning experiences, work summaries, and insights.</p>
                    </div>
                </Link>

                {/* block 2 */}
                <Link href = '/learn' className="col-span-1 rounded-2xl border border-neutral-400/40 hover:border-neutral-300/50 py-3 transition-all duration-150 ease-in-out group">

                    <div
                        className="w-full p-10 flex items-center justify-center mask-x-from-80% mask-x-to-95% mask-y-from-90% mask-y-to-100%"
                        style={{
                            backgroundImage: `
                                    linear-gradient(rgba(163, 154, 159, 0.15) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(163, 154, 159, 0.15) 1px, transparent 1px)
                                `,
                            backgroundSize: '24px 24px'
                        }}>
                        <div className="h-40 w-64 p-3 flex flex-col border border-neutral-800 justify-between bg-neutral-950 rounded-lg group-hover:shadow-2xl group-hover:shadow-zinc-600 transition-all duration-150 ease-in-out">

                            {/* Step 1 */}
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-neutral-600 shrink-0" />
                                <div className="h-3 w-full bg-neutral-600 rounded" />
                            </div>

                            {/* connector */}
                            <div className="ml-1.5 w-0.5 h-4 bg-neutral-700" />

                            {/* Step 2 */}
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-neutral-500 shrink-0" />
                                <div className="h-3 w-5/6 bg-neutral-600 rounded" />
                            </div>

                            {/* connector */}
                            <div className="ml-1.5 w-0.5 h-4 bg-neutral-700" />

                            {/* Step 3 */}
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-neutral-600 shrink-0" />
                                <div className="h-3 w-2/3 bg-neutral-600 rounded" />
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col item-start justify-center gap-2 px-3">
                        <h1 className="text-xl font-bold text-zinc-50">Resources & Learning</h1>
                        <p className="text-base font-thin text-zinc-300/80">Curated resources, setups, and structured paths for frontend, backend, and full-stack development.</p>
                        
                    </div>
                </Link>
            </div>
        </div>
    )
}