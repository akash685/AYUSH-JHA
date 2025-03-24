import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  const handleDownload = () => {
    const pdfUrl = '/CV_Ayush Jha.pdf';
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'CV_Ayush_Jha.pdf');
    link.setAttribute('target', '_blank');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('/CV_Ayush Jha.pdf', '_blank');
  };

  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div className="absolute inset-0 ">
        <ComputersCanvas />
      </div>

      <div
        className={`relative ${styles.paddingX} mx-auto max-w-7xl 
        flex flex-row items-start gap-5 top-[120px] pointer-events-none`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <button
              onClick={handleDownload}
              onContextMenu={handleContextMenu}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 w-fit rounded-xl 
              px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold shadow-md 
              transition-all hover:shadow-xl text-white select-none
              active:scale-95 hover:scale-105 duration-200
              hover:from-violet-700 hover:to-indigo-700
              cursor-[pointer] hover:cursor-[grab] active:cursor-[grabbing]"
              title="Left click to download, Right click to view"
            >
              Download CV
            </button>
            <button
              onClick={() => window.open('/CV_Ayush Jha.pdf', '_blank')}
              onContextMenu={handleDownload}
              className="bg-gradient-to-r from-purple-600 to-pink-600 w-fit rounded-xl 
              px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold shadow-md 
              transition-all hover:shadow-xl text-white select-none
              active:scale-95 hover:scale-105 duration-200
              hover:from-purple-700 hover:to-pink-700
              cursor-[pointer] hover:cursor-[grab] active:cursor-[grabbing]"
              title="Left click to view, Right click to download"
            >
              View CV
            </button>
          </div>
        </div>
      </div>

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center pointer-events-auto">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
