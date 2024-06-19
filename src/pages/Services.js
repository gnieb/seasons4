import TopMenu from "../components/TopMenu";

const Services = () => {
    return (
        <div>
            <TopMenu />
        <div className="overflow-x-hidden">
           
            <div className="pt-24 sm:pt-32 p-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-8  bg-base text-darker">
            <div className="grid grid-rows-2 items-start">
                <div className="text-4xl font-bold">XX</div>
                <div className="text-xl">food etc etc</div>
                <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $119</div>
            </div>
                <div className="grid grid-rows-2 items-start">
                    <div className="text-4xl font-bold">XX</div>
                    <div className="text-xl">catering services etc etc</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $249</div>
                </div>

                

                <div className="grid grid-rows-2 items-center">
                    <div className="text-4xl font-bold">XXX</div>
                    <div className="text-xl">lorem ipsum etc etc</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $59</div>
                </div>

                <div className="grid grid-rows-2 items-center">
                    <div className="text-4xl font-bold">XXX</div>
                    <div className="text-xl">and allll the things etc.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>

                <div className="grid grid-rows-2 items-center">
                    <div className="text-4xl font-bold">XXX</div>
                    <div className="text-xl">eeee wooo </div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>
            </div>

            <div className="mb-10 font-bold text-center italic text-lg sm:text-xl m-auto">Prices vary depending on size and traveling distance</div>
        </div>
        </div>
    )
};

export default Services;