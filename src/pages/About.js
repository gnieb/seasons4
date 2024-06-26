import TopMenu from "../components/TopMenu";


const About = () => {
    return (
        <div className="w-screen">
            <TopMenu />
            <div className="w-screen p-10 md:px-20 text-xl">
                    <div className="w-full p-5 text-3xl font-serif font-bold">Welcome to SEASONS4, where culinary artistry meets exceptional service.</div>
                    <div className="w-full flex justify-between">
                        <div className="w-1/2 p-5">
                            <img className="object-cover" src="https://images.unsplash.com/photo-1525265332434-d52e2314161d?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                        <div className="w-1/2">
                            <div className="p-5 text-left">
                                At Seasons4, we believe that every event is unique and deserves a personalized touch. With a passion for creating unforgettable dining experiences, we specialize in crafting custom menus tailored to your tastes, preferences, and dietary requirements.
                            </div>
                            <div className="p-5 text-left">
                                Our team brings years of experience and creativity to the table, using only the freshest, highest-quality ingredients to prepare dishes that delight the senses. From intimate gatherings to grand celebrations, we are dedicated to exceeding your expectations with impeccable presentation and impeccable flavor.
                            </div>
                        </div>
                    </div>
            </div>
            <div className="p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="grid grid-rows-2 items-center">
                    <div className="text-4xl font-serif font-bold">LOCALLY SOURCED</div>
                    <div>Seasons4 works closely with local farmers, fishermen and artisans to bring you the freshest ingredients at a very reasonable price.</div>
                </div>
                <div className="grid grid-rows-2 items-center">
                    <div className="text-4xl font-serif font-bold">CUSTOM CATERING</div>
                    <div>Seasons4 works closely with local farmers, fishermen and artisans to bring you the freshest ingredients at a very reasonable price.</div>
                </div>
                <div className="grid grid-rows-2 items-center">
                    <div className="text-4xl font-serif font-bold">HIGHEST QUALITY</div>
                    <div>Seasons4 works closely with local farmers, fishermen and artisans to bring you the freshest ingredients at a very reasonable price.</div>
                </div>

            </div>
        </div>
    )
};

export default About;