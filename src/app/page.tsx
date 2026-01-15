
export default function Home() {
  return (
    <>
    {/* Page 1 */}
      <div className="flex h-screen items-center justify-center gap-40 bg-onyx font-geologica">
        <div className="p-6 space-y-5">
          <h1 className="text-teal text-7xl font-bold">Heavenson D. Sencio</h1>
          <h3 className="text-silver text-4xl">Jr. Software Developer Intern</h3>
          <div className="flex gap-2">
          <a href="#portfolio">
            <button className="bg-white w-55 h-10 text-xl font-medium rounded-4xl cursor-pointer hover:bg-amethyst hover:text-white transition-all delay-300">View Portfolio</button>
          </a>
          <a href="#aboutme">
            <button className="bg-white w-55 h-10 text-xl font-medium rounded-4xl cursor-pointer hover:bg-amethyst hover:text-white transition-all delay-300">About Me</button>
          </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/images/profile.jpg" alt="" className="h-96 w-96 rounded-full object-cover"/>
        </div>
      </div>
    {/* Page 2 */}
      <div className="min-h-screen bg-silver font-geologica" id="portfolio">
        <div className="block text-center p-10">
          <h1 className="text-7xl font-bold text-amethyst mb-4">Portfolio</h1>
          <div className="block space-y-5">
            <div className="flex w-full h-60 border rounded-2xl overflow-hidden bg-white">
              <div className="w-60 h-full">
                <img src="images/ALSLOGO.png" alt="" className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-left">
                <h3 className="text-2xl font-bold text-amethyst">
                  Learning Management System for ALS
                </h3>
                <p className="text-gray-600 mt-2">
                  A Capstone Project: A Learning Management System for ALS in Sison, Pangasinan.
                </p>
              </div>
            </div>      
            <div className="flex w-full h-60 border rounded-2xl overflow-hidden bg-white">
              <div className="w-60 h-full">
                <img src="images/websphere.png" alt="" className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-left">
                <h3 className="text-2xl font-bold text-amethyst">
                  Websphere Technologies
                </h3>
                <p className="text-gray-600 mt-2">
                  A Network Provider System for Network Subscribers.
                </p>
              </div>
            </div>      
            <div className="flex w-full h-60 border rounded-2xl overflow-hidden bg-white">
              <div className="w-60 h-full">
                <img src="images/donezone.png" alt="" className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-left">
                <h3 className="text-2xl font-bold text-amethyst">
                  DoneZone
                </h3>
                <p className="text-gray-600 mt-2">
                  A Simple To Do List Using Kanban Boards.
                </p>
              </div>
            </div>      
            <div className="flex w-full h-60 border rounded-2xl overflow-hidden bg-white">
              <div className="w-60 h-full">
                <img src="images/kiosk.png" alt="" className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 text-left">
                <h3 className="text-2xl font-bold text-amethyst">
                  Citizen’s Charter Information Kiosk
                </h3>
                <p className="text-gray-600 mt-2">
                  A kiosk-based display that provides easy access to Citizen’s Charter information.
                </p>
              </div>
            </div>      
          </div>
        </div>
      </div>

    {/* Page 3 */}
      <div className="min-h-screen bg-onyx font-geologica p-44" id="aboutme">
        <h1 className="text-teal text-7xl font-bold">About Heavenson</h1>
        <div className="flex text-silver gap-7 font-medium text-2xl">
          <p>Fullname: Heavenson D. Sencio |</p>
          <p>Birthdate: June 27, 2003 |</p>
          <p>Address: Pidigan, Abra |</p>
          <p>Age: 22</p>
        </div>
        <h3 className="text-silver text-4xl mt-10">A graduate of Bachelor of Science in Information Technology from Northern Luzon Adventist College, with a strong passion for becoming a Software Developer. He enjoys playing video games and engaging in sports such as badminton, basketball, and volleyball. Graphic design is one of the things he is passionate about and loves to do. He is also interested in photography and enjoys beach walks, mountain walks, and spending time in nature.</h3>

        {/* Development Tools */}
        <h3 className="text-silver text-4xl mt-8">Working knowledge on:</h3>
        <div className="flex gap-3 mt-5">
          <img src="/images/html.svg" alt="" className="w-24"/>
          <img src="/images/css.svg" alt="" className="w-24"/>
          <img src="/images/js.svg" alt="" className="w-24"/>
          <img src="/images/ts.svg" alt="" className="w-24"/>
          <img src="/images/angular.svg" alt="" className="w-24"/>
          <img src="/images/laravel.svg" alt="" className="w-24"/>
          <img src="/images/react.svg" alt="" className="w-24"/>
          <img src="/images/tailwind.svg" alt="" className="w-24"/>
          <img src="/images/bootstrap.svg" alt="" className="w-24"/>
          <img src="/images/python.svg" alt="" className="w-24"/>
        </div>

        {/* Graphic Design Tools */}
        <h3 className="text-silver text-4xl mt-8">Foundational design skills using:</h3>
        <div className="flex gap-3 mt-5">
          <img src="/images/indesign.svg" alt="" className="w-24"/>
          <img src="/images/canva.svg" alt="" className="w-24"/>
          <img src="/images/figma.svg" alt="" className="w-24"/>
        </div>
      </div>
    </> 
  );
}
