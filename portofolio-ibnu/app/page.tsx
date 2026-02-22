import Image from "next/image";

export default function Home() {
  const skill = [
    { id: 1, src: "/logo/html.svg", xlWidth: 73, xlHeight: 103, size: "xl:w-[73px] xl:h-[103px] lg:w-[59px] lg:h-[83px]"},
    { id: 2, src: "/logo/css.svg",  xlWidth: 72, xlHeight: 103, size: "xl:w-[72px] xl:h-[103px] lg:w-[58px] lg:h-[83px]"},
    { id: 3, src: "/logo/js.svg",   xlWidth: 72, xlHeight: 103, size: "xl:w-[72px] xl:h-[103px] lg:w-[58px] lg:h-[83px]"},
    { id: 4, src: "/logo/c++.svg",  xlWidth: 93, xlHeight:  93, size: "xl:w-[93px] xl:h-[93px] lg:w-[75px]  lg:h-[75px]"},
    { id: 5, src: "/logo/c.svg",   xlWidth: 103,xlHeight: 103, size: "xl:w-[103px] xl:h-[103px] lg:w-[83px] lg:h-[83px]"},
    { id: 6, src: "/logo/java.svg", xlWidth: 77, xlHeight: 103, size: "xl:w-[77px] xl:h-[103px] lg:w-[62px] lg:h-[83px]"},
    { id: 7, src: "/logo/react.svg",xlWidth: 103,xlHeight:  93, size: "xl:w-[103px] xl:h-[93px] lg:w-[83px] lg:h-[75px]"},
    { id: 8, src:"/logo/nextjs.svg",xlWidth: 103,xlHeight:  84, size: "xl:w-[103px] xl:h-[84px] lg:w-[83px] lg:h-[68px]"},
    { id:9,src:"/logo/tailwind.svg",xlWidth: 100,xlHeight:  77, size: "xl:w-[100px] xl:h-[77px] lg:w-[80px] lg:h-[62px]"},
    { id:10,src:"/logo/laravel.svg",xlWidth: 103,xlHeight:  83, size: "xl:w-[103px] xl:h-[83px] lg:w-[83px] lg:h-[67px]"},
    { id: 11, src: "/logo/ci.svg",  xlWidth: 103,xlHeight:  93, size: "xl:w-[103px] xl:h-[93px] lg:w-[83px] lg:h-[75px]"}
  ];

  const icon = [
    { id: 1, src: "/icons/wa.svg", width: 60, height: 60,objective: "https://wa.me/6282325299550"},
    { id: 2, src: "/icons/ig.svg", width: 60, height: 60,objective: "https://www.instagram.com/ibnu_zaidanj"},
    { id: 3, src: "/icons/linkedin.svg", width: 60, height: 60,objective: "https://www.linkedin.com/in/ibnuzaidan"}
  ];

  const project = [
    { id: 1, foto: "/projectProfile/safeena.png", objective: "/safeena", title: "Company Profile Website", position: "frontend developer"},
    { id: 2, foto: "/projectProfile/nexus.png", objective: "/nexus", title: "Nexus Financial App", position: "fullstack developer"},
    { id: 3, foto: "/projectProfile/himasela.png", objective: "/himasela", title: "Organization Website HIMASELA", position: "fullstack developer"},
  ]

  const positionColor = (posisi: string) => {
    if(posisi === "fullstack developer"){
      return "bg-[#09C25B]/70"
    }
    else if(posisi === "frontend developer") {
      return "bg-[#FFE501]/70"
    }
    else if(posisi === "backend developer") {
      return "bg-[#272F7A]/70"
    }

    return "bg-[#4E4F51]"
  }

  return (
    <main className="bg-dark">
      <div className="grid lg:grid-cols-[35%_65%]">
        <div className="py-20 lg:py-0 min-h-screen w-full flex flex-col gap-2 lg:gap-0 items-center justify-center md:bg-[radial-gradient(circle_at_center,_var(--light)_0%,_var(--dark)_50%)]">
          <span className="md:text-[24px] lg:text-[20px] xl:text-[24px] leading-tight">Hello, I am</span>
          <span className="md:text-[40px] lg:text-[36px] xl:text-[48px] leading-tight font-bold">Ibnu Zaidan Akbar</span>
          <Image
            src="/foto.png" alt="foto"
            width={1290} height={540} priority
            className="h-[70dvh] md:w-[633px] md:h-[528px] lg:w-[844px] lg:h-[420px] xl:w-[1290px] xl:h-[540px] w-auto object-contain"
            />
        </div>

        <div className="md:p-12 lg:p-0 min-h-screen w-full flex flex-col gap-4 justify-center lg:pr-12 xl:pr-20 xl:bg-[radial-gradient(circle_at_right,_var(--light)_0%,_var(--dark)_35%)]">
          <div className="flex flex-col">
            <span className="md:text-[42px] lg:text-[28px] xl:text-[42px] text-center lg:text-left font-semibold">About Me</span>
            <p className="md:text-[20px] lg:text-[16px] xl:text-[20px] text-justify leading-tight">I'm driven by the challenge of turning complex ideas into digital products that are intuitive, efficient, and relevant. My interest lies in how code, design, and insight can work together to solve real problems, not only from a technical perspective but also in ways that are purposeful and impactful for users. I enjoy exploring how users interact with systems, how data informs direction, and how small design decisions can shape large outcomes. With a technical mindset and a creative edge, I'm constantly learning new tools, experimenting with ideas, and seeking opportunities to contribute to projects that are both functional and forward-thinking.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
            <div className="flex flex-col">
              <span className="md:text-[42px] lg:text-[28px] xl:text-[42px] font-semibold">Education</span>
              <p className="md:text-[24px] lg:text-[16px] xl:text-[24px] leading-tight">● 2024 - Present<br/>Padjadjaran University, Sumedang</p>
            </div>
            <div className="flex flex-col">
              <span className="md:text-[42px] lg:text-[28px] xl:text-[42px] font-semibold">Internship Experience</span>
              <p className="md:text-[24px] lg:text-[16px] xl:text-[24px] leading-tight">● Nov 2025 - Jan 2026<br/>Safeena Academy - Frontend Developer</p>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="md:text-[42px] lg:text-[28px] xl:text-[42px] font-semibold">Skills</span>
            <div className="flex flex-wrap gap-y-4 gap-x-8 w-full justify-center lg:justify-start">
              {skill.map((item) => (
                <Image
                  key={item.id} src={item.src}
                  width={item.xlWidth} height={item.xlHeight}
                  alt="logo" className={item.size}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col md:py-4 lg:px-4 xl:py-12 xl:px-6">
        <span className="md:text-[48px] lg:text-[36px] xl:text-[48px] font-semibold md:pb-4 text-center">Featured Project</span>
        <div className="flex flex-wrap md:gap-8 justify-center">
          {project.map((item) => (
            <a key={item.id} href={item.objective}>
              <div className="bg-[#4E4F51] md:w-[450px] h-fit rounded-2xl flex flex-col" >
                <div>
                  <Image
                    width={400} height={240}
                    src={item.foto} alt="project"
                    className="rounded-2xl mdlg:w-[350px] lg:h-[170px]"
                  />
                </div>
                <span className={"w-fit lg:text-[16px] text-white/90 font-semibold mt-4 mx-4 py-1 px-4 inline-block rounded-full " + positionColor(item.position)}>{item.position}</span>
                <span className="lg:text-[20px] text-white font-bold py-2 px-4 leading-tight">{item.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:pb-12 md:gap-4">
            <span className="md:text-[36px] font-semibold text-center">Contacts</span>
            <div className="flex flex-wrap md:gap-x-8 md:gap-y-4 w-full justify-center">
              {icon.map((item) => (
                <a key={item.id} href={item.objective} target="_blank">
                  <Image
                    width={item.width} height={item.height}
                    src={item.src} alt="icon"
                    />
                </a>
              ))}
            </div>
          </div>
    </main>
  );
}
