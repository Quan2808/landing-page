import React from "react";

export default function TeamsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-16 md:pt-24 lg:px-24 ">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          <div className="w-full lg:w-1/2">
            <h2 className="font-manrope text-5xl text-accent font-bold leading-[4rem] mb-7 text-center lg:text-left">
              Our leading, strong & creative team
            </h2>
            <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">
              These people work on making our product best.
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <img
                  src="https://images2.thanhnien.vn/528068263637045248/2025/5/26/edit-48427799012203294996640565770072566130465660n-174827854706467715024.jpeg"
                  alt="Team member John Doe"
                  className="w-44 h-56 rounded-2xl object-cover md:mt-20 min-[450px]:mr-0"
                />
                <p className="mt-2 text-base text-gray-700">
                  Trịnh Trần Phương Tứn
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://media-cdn-v2.laodong.vn/storage/newsportal/2024/3/13/1314771/Jack-1-1.jpeg"
                  alt="Team member Jane Smith"
                  className="w-44 h-56 rounded-2xl object-cover min-[450px]:ml-0 md:mx-auto"
                />
                <p className="mt-2 text-base text-gray-700">Jane Smith</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.24h.com.vn/upload/3-2022/images/2022-07-22/MV-moi-gay-nhieu-tranh-cai-Jack-kiem-duoc-bao-nhieu-tien-tu-kenh-YouTube-anh-1-1658471533-451-width739height663.jpg"
                  alt="Team member Alex Johnson"
                  className="w-44 h-56 rounded-2xl object-cover md:mt-20 min-[450px]:mr-0 md:ml-0"
                />
                <p className="mt-2 text-base text-gray-700">Alex Johnson</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://thanhnien.mediacdn.vn/Uploaded/haoph/2021_10_21/jack-va-thien-an-5805.jpeg"
                  alt="Team member Emily Davis"
                  className="w-44 h-56 rounded-2xl object-cover min-[450px]:ml-0 md:mr-0 md:ml-auto"
                />
                <p className="mt-2 text-base text-gray-700">Emily Davis</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://vcdn1-giaitri.vnecdn.net/2021/01/17/jack-2-3889-1610846872.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=R_oQZ2idkj_DYhYQed_Jmw"
                  alt="Team member Michael Brown"
                  className="w-44 h-56 rounded-2xl object-cover md:-mt-20 min-[450px]:mr-0 md:mx-auto"
                />
                <p className="mt-2 text-base text-gray-700">Michael Brown</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://scontent.fdad2-1.fna.fbcdn.net/v/t51.75761-15/505433084_18125454988445889_8437539079780816781_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7rpMiXX6KhQQ7kNvwGu4voe&_nc_oc=Adnn4zdTD-tDsVVPZW6H4wMVqD41ULWi0LNjAKlRmfrYfV0L2E-9ifEM-4wZxYKtHo4&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=5mMUUje67dSUUUns-U94xQ&oh=00_AfOfWhZ-oqo4uF06wqAYOkhRhKaGbeD2BAkWf1R5pF1VFA&oe=6855FCD5"
                  alt="Team member Sarah Wilson"
                  className="w-44 h-56 rounded-2xl object-cover min-[450px]:ml-0 md:mr-0"
                />
                <p className="mt-2 text-base text-gray-700">Sarah Wilson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
