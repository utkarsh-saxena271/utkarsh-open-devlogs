

export default function Container(
   {children, className} :{
        children:React.ReactNode,
        className?:string
    }
){
    return(
       <div className={`${className} flex flex-col items-center justify-start gap-37 bg-zinc-950 max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto min-h-screen py-10 lg:py-18 px-2`}>
            {children}
        </div>
    )
}