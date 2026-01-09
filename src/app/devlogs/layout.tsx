import SideBar from "@/components/Devlogs/SideBar"

export default function DevlogsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen grid grid-cols-4">
            <div className="col-span-1">
                <SideBar/>
            </div>
            <div className="col-span-3">
                {children}
            </div>
        </div>
    )
}