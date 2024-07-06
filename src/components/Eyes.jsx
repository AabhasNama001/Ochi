import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Yahan (180/Math.PI) humne 57.295 ki jgh use me liya hai.
      // what is 57.295 ?
      // 57.295 is the value which comes when we convert radians into degree
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.4"
        className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
          {/* Eye */}
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            {/* Eyeball */}
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <h1 className="top-[9vh] left-[8vh] absolute">Play</h1>
              {/* Woh line jiske andar eye pupil rotate kregi. Mtlb?
              Mtlb ye ki ek rectangular sheet le aankh jitni jiske upar coin rkh ab uss sheet ko rotate kr
              Kya dikha ? Sheet ko rotate krne se coin bhi rotate ho rha hai na. Bss whi concept use
               ho rha hai eyepupil ko rotate kraaaaaaane me.
               Ek baat dhyaan rkhna yaha line transparent hai toh screen p visible nhi hogi pr 
               asal m line hai */}
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                {/* Eye Pupil */}
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <h1 className="top-[9vh] left-[8vh] absolute">Play</h1>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                {/* Eye Pupil */}
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
