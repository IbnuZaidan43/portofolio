import Image from "next/image";

export default function Himasela() {
    const foto = [
        { id: 1, src: "/projectProfile/himasela.png"},
        { id: 2, src: "/assets/h1.png"},
        { id: 3, src: "/assets/h2.png"},
        { id: 4, src: "/assets/h3.png"},
        { id: 5, src: "/assets/h4.png"},
        { id: 6, src: "/assets/h5.png"},
        { id: 7, src: "/assets/h6.png"}
    ];
    
    return (
        <main className="bg-dark">
            <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,var(--light)_0%,transparent_30%),radial-gradient(circle_at_bottom_left,var(--light)_0%,var(--dark)_30%)]">
                <div className="grid grid-cols-[15%_85%] p-6">
                    <div className="p-10 bg-[#E0E4E7]/70 rounded-full">
                        <Image
                            src="/assets/lh.svg" alt="logo himasela"
                            width={216} height={180}
                        />
                    </div>
                    <div className="flex flex-col p-8 justify-center">
                        <span className="text-[42px] font-bold">Website Department Keilmiahan Himasela Unsoed</span>
                        <p className="text-[28px] leading-none">An information management website platform for the "land resource planning student association" designed to integrate work program documentation, department progress, and digital asset management through Google Drive-based storage synchronization.</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-y-2">
                    {foto.map((item) => (
                        <Image
                        key={item.id}
                            src={item.src} alt="dokumentasi"
                            width={630} height={332} className="px-2 py-1 rounded-3xl"
                            />
                        ))}
                </div>
                <div className="max-w h-fit flex p-8 justify-center align-center">
                    <a className="text-[24px]" href="https://www.keilmiahanhimasela.space/" target="_blank">View Project 👁</a>
                </div>
            </div>
        </main>
    )
}