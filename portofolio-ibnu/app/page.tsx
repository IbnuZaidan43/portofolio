import Image from "next/image";

export default function Home() {
  const skill = [
    { id: 1, src: "/logo/html.svg", width: 73, height: 103},
    { id: 2, src: "/logo/css.svg", width: 72, height: 103},
    { id: 3, src: "/logo/js.svg", width: 72, height: 103},
    { id: 4, src: "/logo/c++.svg", width: 93, height: 93},
    { id: 5, src: "/logo/c.svg", width: 103, height: 103},
    { id: 6, src: "/logo/java.svg", width: 77, height: 103},
    { id: 7, src: "/logo/react.svg", width: 103, height: 93},
    { id: 8, src: "/logo/nextjs.svg", width: 103, height: 84},
    { id: 9, src: "/logo/tailwind.svg", width: 100, height: 77},
    { id: 10, src: "/logo/laravel.svg", width: 103, height: 83},
    { id: 11, src: "/logo/ci.svg", width: 103, height: 93}
  ];

  const icon = [
    { id: 1, src: "/icons/wa.svg", width: 60, height: 60, objective: "https://wa.me/6282325299550"},
    { id: 2, src: "/icons/ig.svg", width: 60, height: 60, objective: "https://www.instagram.com/ibnu_zaidanj"},
    { id: 3, src: "/icons/linkedin.svg", width: 60, height: 60, objective: "https://www.linkedin.com/in/ibnuzaidan"}
  ];

  const project = [
    { id: 1, foto: "/projectProfile/nexus.png", objective: "/nexus", title: "Nexus Financial App", position: "fullstack developer"},
    { id: 2, foto: "/projectProfile/himasela.png", objective: "/himasela", title: "Organization Website HIMASELA", position: "fullstack developer"},
    { id: 3, foto: "/projectProfile/safeena.png", objective: "/safeena", title: "Company Profile Webiste", position: "frontend developer"}
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
      <div className="grid grid-cols-[40%_60%]">
        <div className="min-h-screen w-full flex flex-col gap-0 items-center justify-center bg-[radial-gradient(circle_at_center,_var(--light)_0%,_var(--dark)_60%)]">
          <span className="text-[24px] leading-tight">Hello, I am</span>
          <span className="text-[60px] leading-tight font-bold">Ibnu Zaidan Akbar</span>
          <Image
            src="/foto.png" alt="foto"
            width={1290} height={1720} priority
            className="h-[70dvh] w-auto object-contain"
            />
        </div>

        <div className="min-h-screen w-full flex flex-col gap-4 justify-center pr-24 bg-[radial-gradient(circle_at_right,_var(--light)_0%,_var(--dark)_35%)]">
          <div className="flex flex-col">
            <span className="text-[42px] font-semibold">About Me</span>
            <p className="text-[20px] text-justify leading-tight">I'm driven by the challenge of turning complex ideas into digital products that are intuitive, efficient, and relevant. My interest lies in how code, design, and insight can work together to solve real problems, not only from a technical perspective but also in ways that are purposeful and impactful for users. I enjoy exploring how users interact with systems, how data informs direction, and how small design decisions can shape large outcomes. With a technical mindset and a creative edge, I'm constantly learning new tools, experimenting with ideas, and seeking opportunities to contribute to projects that are both functional and forward-thinking.</p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[42px] font-semibold">Education</span>
              <p className="text-[24px] leading-tight">● 2024 - Present<br/>Padjadjaran University, Sumedang</p>
            </div>
            <div className="flex flex-col">
              <span className="text-[42px] font-semibold">Internship Experience</span>
              <p className="text-[24px] leading-tight">● Nov 2025 - Jan 2026<br/>Safeena Academy - Frontend Developer</p>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-[42px] font-semibold">Skills</span>
            <div className="flex flex-wrap gap-y-4 gap-x-8 w-full">
              {skill.map((item) => (
                <Image
                  key={item.id} src={item.src}
                  width={item.width} height={item.height}
                  alt="logo" 
                />
              ))}
            </div>
          </div>

          <div>
            <span className="text-[42px] font-semibold">Contacts</span>
            <div className="flex flex-wrap gap-x-8 gap-y-4 w-full">
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
        </div>
      </div>

      <div className="py-8 px-12">
        <span className="text-[48px] font-semibold">Featured Project</span>
        <div className="flex flex-wrap justify-between">
          {project.map((item) => (
            <a key={item.id} href={item.objective} target="_blank">
              {/* div buat background abu gitu */}
              <div className="bg-[#4E4F51] w-[570px] h-fit rounded-2xl" >
                {/* div buat image */}
                <div>
                  <Image
                    width={512} height={300}
                    src={item.foto} alt="project"
                    className="rounded-2xl"
                  />
                </div>
                <span className={"text-[20px] text-white/90 font-semibold my-4 mx-4 py-2 px-4 inline-block rounded-full " + positionColor(item.position)}>{item.position}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
