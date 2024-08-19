
function Testimonial() {
    const personnels = [
        { image: 'https://www.freepik.com/photos/man-smiling#referrer=detail&resource=7541620', name: 'Ishimwe Jean', status: 'CEO TUZA' },
        { image: 'https://www.freepik.com/photos/man-smiling#referrer=detail&resource=7541620', name: 'Ishimwe Jean', status: 'CEO TUZA' },
        { image: 'https://www.freepik.com/photos/man-smiling#referrer=detail&resource=7541620', name: 'Ishimwe Jean', status: 'CEO TUZA' }
    ]

    return (
        <section className="grid grid-col-2">
            <div className=" w-1/2">
                <div className="flex flex-wrap flex-col">
                    <img src="https://www.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_20988342.htm#fromView=search&page=1&position=5&uuid=4e6a9a19-f885-43da-b5ce-bf9dd7f12838" alt="" />
                    <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                    <p className="text-blue-950 font-sans font-semibold">
                        Editor subtract rectangle auto project flatten content opacity hand horizontal.
                        Effect pen draft subtract style background main arrange ipsum.
                        Pen editor arrange pen invite reesizing vertical duplicate.
                        Pixel italic editor main project effect invite share.
                        Hand strikethrough create vertical rectangle inspect auto italic.
                    </p>
                    <h5 className="text-blue-950 font-bold">ISHIMWE Jean</h5>
                    <h6 className="text-gray-500 font-semibold">CEO TUZA</h6>
                </div>
            </div>
            <div >
                <div>
                    <h1 className="text-orange-500 font-bold text-3xl">WHAT THEY SAY ABOUT US</h1>
                    {personnels.map((personnel, index) => (
                        <div key={index}>
                            <img src={personnel.image} alt="" />
                            <p>{personnel.name}</p>
                            <p>{personnel.status}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonial
