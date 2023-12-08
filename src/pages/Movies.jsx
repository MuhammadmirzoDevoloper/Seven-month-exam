import Puls from "../icons/Puls";
import Redstar from "../icons/Redstar";
import Redyarmstar from "../icons/Redyarmstar";
import Releasedyear from "../icons/Releasedyear";
import Strelkaleft from "../icons/Strelkaleft";
import Strelkaright from "./../icons/Strelkaright";

function Movies() {
  return (
    <main className=" container mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <div className="bg-gray-800 flex p-12 gap-3 items-flex-start flex-col self-stretch rounded-xl border border-solid mb-8">
            <h1 className="text-lg text-gray-500">Description</h1>

            <p className="text-white">
              A fiery young man clashes with an unflinching forest officer in a
              south Indian village where spirituality, fate and folklore rule
              the lands.
            </p>
          </div>

          <div className="bg-gray-800 flex p-12 gap-3 items-flex-start flex-col self-stretch rounded-xl border border-solid mb-8">
            <div className="flex items-center justify-between ">
              <p className="text-lg text-gray-500">Cast</p>
              <div className="flex gap-3 items-center border-solid mb-8">
                <span className="rounded-[100px] bg-orange-800  p-4  ">
                  <Strelkaleft />
                </span>
                <span className="rounded-[100px] bg-orange-800  p-4  ">
                  <Strelkaright />
                </span>
              </div>
            </div>
            <div className="h-28 flex gap-5 justify-self-stretch items-center justify-between border-solid rounded-[100px] bg-orange-800 p-4">
              <Strelkaleft /> <Strelkaleft /> <Strelkaleft /> <Strelkaleft />
              <Strelkaleft /> <Strelkaleft /> <Strelkaleft /> <Strelkaleft />
            </div>
          </div>

          <div className="bg-gray-800 flex p-12 gap-3 items-flex-start flex-col self-stretch rounded-xl border border-solid mb-8">
            <div className="flex items-center justify-between ">
              <p className="text-lg text-gray-500">Reviews</p>
              <div className="pulslaniki - flex gap-4 px-5 py-4 items-center rounded-lg border-solid bg-gray-700  ">
                <Puls />
                <p className="text-white">Add Your Review</p>
              </div>
            </div>

            <div className="pages-div -  flex  gap-4 mb-8bg-gray-800  ">
              <div className="bir- bg-black p-10 sm:rounded-md ">
                <div className="tort-yarm-yulduz - text-white flex items-center justify-between gap-10">
                  <div className="antiketboy-fromniki mb-5">
                    <h1 className="text-white">Aniket Roy</h1>
                    <p className=" text-gray-400">From India</p>
                  </div>
                  <div className=" flex gap-1 px-3 py-2 items-center sm:rounded-3xl border-solid bg-slate-700">
                    <Redstar />
                    <Redstar />
                    <Redstar />
                    <Redstar />
                    <Redyarmstar /> <p className="gap-1 items-center">4.5</p>
                  </div>
                </div>
                <div className="p-tagi - text-gray-400">
                  <p>
                    This movie was recommended to me by a very dear friend who
                    went for the movie by herself. I went to the cinemas to
                    watch but had a houseful board so couldn’t watch it.
                  </p>
                </div>
              </div>

              <div className="ikkinchi-pages bg-black p-10 sm:rounded-md">
                <div className="tort-yarm-yulduz - text-white flex items-center justify-between gap-10">
                  <div className="antiketboy-fromniki mb-5">
                    <h1 className="text-white">Aniket Roy</h1>
                    <p className=" text-gray-400">From India</p>
                  </div>
                  <div className=" flex gap-1 px-3 py-2 items-center sm:rounded-3xl border-solid bg-slate-700">
                    <Redstar />
                    <Redstar />
                    <Redstar />
                    <Redstar />
                    <Redstar />
                    <p className="gap-1 items-center">5</p>
                  </div>
                </div>
                <div className="p-tagi - text-gray-400">
                  <p>
                    A restless king promises his lands to the local tribals in
                    exchange of a stone (Panjurli, a deity of Keradi Village)
                    wherein he finds solace and peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*---------------------------     Yon Taraf Page   ------------------------------------ */}

        {/*  ---------- OBshe katta div -------------- */}
        <div className="pages-div - gap-4  mb-30 h-[837px] bg-gray-800">

          {/*  ----------  releasedyear div -------------- */}

          <div className="Releasedyear- p-10 sm:rounded-md gap-1 - bg-gray-800 flex items-flex-start items-center mb-    ">
            <div className="Released-icon   w-6 h-6 ">
              <Releasedyear />
              {/* 2022 - divniki */}
              <div className="2022-niki text-xl text-white font-semibold ">
                <h1>2022</h1>
              </div>
            </div>
            <div h1-Releasedyear>
              <h1 className="h1-released - text-lg font-medium text-gray-500 ">
                Released Year
              </h1>
            </div>

          </div>

          <div className="ikkinchi-pagesbg-gray-800 p-10 sm:rounded-md">
            <div className="tort-yarm-yulduz - text-white flex items-center justify-between gap-10">
              <div className="antiketboy-fromniki mb-5">
                <h1 className="text-white">Aniket Roy</h1>
                <p className=" text-gray-400">From India</p>
              </div>
              <div className=" flex gap-1 px-3 py-2 items-center sm:rounded-3xl border-solid bg-slate-700">
                <Redstar />
                <Redstar />
                <Redstar />
                <Redstar />
                <Redstar />
                <p className="gap-1 items-center">5</p>
              </div>
            </div>
            <div className="p-tagi - text-gray-400">
              <p>
                A restless king promises his lands to the local tribals in
                exchange of a stone (Panjurli, a deity of Keradi Village)
                wherein he finds solace and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Movies;

{
  /* <div className="tort-yarm-yulduz - text-white flex items-center justify-between gap-10">

  <div className="antiketboy-fromniki mb-5">
    <h1 className="text-white">Aniket Roy</h1>
    <p className=" text-gray-400">From India</p>
  </div>
  <div className=" flex gap-1 px-3 py-2 items-center sm:rounded-3xl border-solid bg-slate-700">
    <Redstar />
    <Redstar />
    <Redstar />
    <Redstar />
    <Redyarmstar /> <p className="gap-1 items-center">4.5</p>
  </div>
</div> */
}