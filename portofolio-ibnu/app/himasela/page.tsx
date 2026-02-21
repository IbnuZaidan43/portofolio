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
                <div className="flex pl-6 p-4">
                    <div className="p-10 bg-[#E0E4E7]/70 rounded-full">
                        <Image
                            src="/assets/lh.svg" alt="logo himasela"
                            width={216} height={180}
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[36px] font-bold">Website Departemen Keilmiahan Himasela Unsoed</span>
                        <p></p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    {foto.map((item) => (
                        <Image
                        key={item.id}
                            src={item.src} alt="dokumentasi"
                            width={630} height={332} className="px-2 py-1 rounded-3xl"
                            />
                        ))}
                </div>
            </div>
        </main>
    )
}