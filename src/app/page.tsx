import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen md:flex-row items-center p-6">
        <div className="w-9xl items-center justify-center">
          <h1 className="text-5xl md:text-8xl font-bold">SoundCore v20i by Anker</h1>
          <p className="text-sm md:text-2xl mt-5">The Soundcore V20i delivers clear audio, long-lasting battery life, and seamless connectivity, designed to keep up with your active lifestyle.</p>
          <a href="https://www.soundcore.com/au/products/soundcore-v20i-open-ear-earbuds?variant=45768545042652">
            <button className="md:w-50 md:h-12 md:text-lg border-2 cursor-pointer rounded-2xl w-55 h-8 mt-5 font-medium text-sm transition-all duration-300 bg-black text-white hover:bg-white hover:text-black hover:border-black" >Get Yours Today</button>
          </a>
        </div>
        <div className="flex items-center justify-center w-full">
          <img src="/images/product.png" alt="" className="w-full max-w-md"/>
        </div>
      </div>
    </>
  );
}
