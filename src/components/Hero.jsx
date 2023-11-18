import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] justify-center max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div >
          <h1 className={`${styles.heroHeadText} text-white`}>
            WELCOME TO <br /><span >
              <p className="font-bold bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 text-transparent bg-clip-text ">JUMBOJAM</p>
              </span> 
          </h1>

          
          
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
