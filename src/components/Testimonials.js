const Testimonials = () => {
    return (
        <div className="text-white w-screen h-1/2 bg-white opacity-75 flex items-center justify-center grayscale bg-[url('https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvY2ElMjBzdHJpbmclMjByZXN0YXVyYW50JTIwbGlnaHRzfGVufDB8fDB8fHww')]">
           <div className="">
                <div className="text-4xl py-10 font-black">Testimonials</div>
                <div className="italic py-10 w-1/2 m-auto">Food was great and very flavorful. Thanks to Samuel he made our last minute office party happen ! Over all great experience. Big thanks !!</div>
                <div className="flex justify-center py-10">
                    <div className="w-10 font-black">←</div>
                    <div className="w-30 italic font-black">Eric Mason</div>
                    <div className="w-10 font-black">→</div>
                </div>
            </div> 
        </div>
    )
};

export default Testimonials;