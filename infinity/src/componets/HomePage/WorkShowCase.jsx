function WorkShowCase() {
    return (
        <div>
            <section className="flex flex-row justify-between items-center p-7">
                <div className="flex flex-col lg:flex-col items-start lg:items-start w-fit p-11">
                    <h1 className="text-6xl font-bold text-orange-500 mb-5">Web & Mobile Development</h1>
                    <h3 className="text-lg font-bold text-blue-950 mb-5">Someone is aware of our business</h3>
                    <p className="text-balance mb-5">
                        Our mobile application development services provide the proper solutions and resources to assist organizations in creating high-quality, user-friendly, and engaging mobile.
                        Our skilled app developers and UI/UX designers can assist your company in preparing for the digital needs of the tech-savvy world.
                        We will collaborate to create great apps that will help you expand your business, fuelled by your ideas and our experience.
                    </p>
                    <button className="bg-orange-500 mb-5 text-white py-2 px-6 font-bold font-mono shadow-md hover:bg-orange-600 inline-block">Learn More →</button>
                </div>

                <div className="">

                    <figure className="relative max-w-sm  cursor-pointer">
                        <a href="#">
                            <img className="rounded-lg h-auto max-w-lg w-96 self-end " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description"/>
                        </a>
                        <figcaption className="absolute px-4 text-lg font-bold bg-orange-300 w-auto p-4 left-4 rounded-t-lg text-orange-500 bottom-6">
                            <p>UI/UX Design</p>
                        </figcaption>
                    </figure>

                </div>
            </section>
        </div>
    )
}

export default WorkShowCase
