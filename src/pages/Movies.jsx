import EmptyStar from "../icons/EmptyStar";
import Puls from "../icons/Puls";
import Redstar from "../icons/Redstar";
import Redyarmstar from "../icons/Redyarmstar";
import Releasedyear from "../icons/Releasedyear";
import Strelkaleft from "../icons/Strelkaleft";
import Translateicon from "../icons/Translateicon";
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

            <div className="pages-div -  flex  gap-4 bg-gray-800  ">
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
        <div className="pages-div - gap-4 h-[837px] bg-gray-800">
          {/*  ----------  releasedyear div -------------- */}

          <div className="Releasedyear- p-12 sm:rounded-md gap-1 - bg-gray-800 flex items-flex-start items-center ">
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
          {/* ----------------- LANGEAGE DIV ------------------------- */}

          <div className="Language-div  p-12 sm:rounded-md gap-1 - bg-gray-800 flex items-flex-start items-center   ">
            <div className="language-icon ">
              <Translateicon />
            </div>
            <div className="avialabl-Language text-lg font-medium text-gray-500">
              <h1>Available Languages</h1>
            </div>
          </div>

          {/* Tillar buttondagi */}

          <div className="flex text-white text-lg font-medium items-center gap-3 sm:rounded-3xl  p-12  items-flex-start justify-start justify-self-stretch flex-wrap  ">
            <div className="english flex gap-3 rounded-lg border-solid bg-black  px-4 py-2">
              {" "}
              <h1>English</h1>
            </div>
            <div className="Hindi flex gap-3 rounded-lg border-solid bg-black  px-4 py-2">
              <h1>Hindi</h1>
            </div>
            <div className="Tamil flex gap-3 rounded-lg border-solid bg-black  px-4 py-2">
              <h1>Tamil</h1>
            </div>
            <div className="Telegu flex gap-3 rounded-lg border-solid bg-black  px-4 py-2">
              <h1>Telegu</h1>
            </div>
            <div className="Kannada flex gap-3 rounded-lg border-solid bg-black  px-4 py-2">
              <h1>Kannada</h1>
            </div>
          </div>

          {/*    --------------------   RATINGS STAR PAGE ----------------- */}

          <div className="Ratings gap-13 p-12  ">
            <div className="star  flex gap-1 items-center ext-lg font-medium sm:rounded-3xl  items-flex-start justify-start justify-self-stretch flex-wrap ">
              <EmptyStar />
              <h1 className=" text-gray-500">Ratings</h1>
            </div>
          </div>

          {/*------------------------------ -IMDb STARS BUTTON PAGE--------- ----------------------------*/}

          <div className="two-button - flex items-center p-12 gap-5">

            <div className="first-button -  flex flex-col gap-1 items-center p-4 flex-1 bg-black rounded-lg border-solid" >
              <h1 className=" text-white mr-[80px] text-xl font-semibold leading-4">IMDb</h1>
              <div className="flex items-center gap-1">
                <Redstar />
                <Redstar />
                <Redstar />
                <Redstar />
                <Redyarmstar />
                <p className="text-white">4.5</p>
              </div>
            </div>
            {/* second -button */}

            <div className="Second-button -  flex flex-col gap-1 items-center p-4 flex-1 bg-black rounded-lg border-solid" >
              <h1 className=" text-white mr-[16px]   text-xl font-semibold leading-4">Streamvibe</h1>
              <div className="flex items-center gap-1">
                <Redstar />
                <Redstar />
                <Redstar />
                <Redstar />
                <Redyarmstar />
                <p className="text-white">4</p>
              </div>

            </div>




          </div>





































        </div>
      </div>
    </main>
  );
}

export default Movies;
