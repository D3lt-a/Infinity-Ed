
function proof() {
    const data = [
        { title: 'Succesful Clients', amount: '25' },
        { title: 'Customer Reach', amount: '122' },
        { title: 'Projects Worked on so far', amount: '132' },
        { title: 'Companies', amount: '42' }
    ]

    return (
        <section>
            <div className="max-w-6xl bg-gray-700 rounded-lg p-11 mx-auto flex flex-col lg:flex-row items-start lg:items-center">
                <div className="lg:w-1/3 ml-7 mb-8 lg:mb-0">
                    <h1 className="text-2xl font-bold text-orange-500 mb-4">
                        We assist businesses
                        in telling successful tales.
                    </h1>

                    <p className="text-white mb-6">
                        Providing exceptional bespoke software
                        solutions to startups, small companies, medium enterprises, and major
                        corporations across all industries.
                    </p>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
                    {data.map((data, index) => (
                        <div key={index} className=" p-1 text-center">
                            <h2 className="text-2xl font-bold text-white">{data.title}</h2>
                            <h1 className="text-white text-2xl">{data.amount}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default proof
