import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen flex items-center justify-center`}>
      <div className={`max-w-7xl ${styles.paddingX}`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            <span className="font-bold bg-gradient-to-r from-green-800 via-gray-400 to-green-800 text-transparent bg-clip-text">WELCOME</span>
            <span className="block">TO</span>
            <span className="block">
              <p className="font-bold bg-gradient-to-r from-green-800 via-gray-400 to-green-800 text-transparent bg-clip-text">RELASTIC</p>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;