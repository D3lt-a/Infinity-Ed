function ProjectOverview() {
    const products = [
        { img: 'https://img.freepik.com/premium-photo/ui-ux-designs_1197721-38368.jpg?size=626&ext=jpg', client: 'Tuza', place: 'Rwanda', product: 'Tuza Podcast', category: 'UI/UX, Development' },
        { img: 'https://img.freepik.com/premium-photo/ui-ux-designs_1197721-38368.jpg?size=626&ext=jpg', client: 'Tuza', place: 'Rwanda', product: 'Tuza Podcast', category: 'UI/UX, Development' },
        { img: 'https://img.freepik.com/premium-photo/ui-ux-designs_1197721-38368.jpg?size=626&ext=jpg', client: 'Tuza', place: 'Rwanda', product: 'Tuza Podcast', category: 'UI/UX, Development' }
    ]

    return (
        <div>
            <section className="text-center space-y-9">
                <div>
                    <p className="text-center bg-orange-200 text-orange-500 font-bold w-32 rounded mx-auto">Case Studies</p>
                </div>
                <h1 className="lg:text-5xl  sm:text-2xl font-bold">We develop products that address issues faced by customers</h1>
                <div>
                    <div className=" bg-white border-none lg:w-5/6 mx-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
                        {products.map((product, index) => (
                            <div key={index} className="">
                                <img className="rounded-t-lg" src={product.img} alt="" />

                                <div className="p-6 ">
                                    <p className="text-xs text-gray-500">Client: {product.client} <strong>{product.place}</strong> </p>
                                    <h5 className="font-bold text-blue-950">{product.product}</h5>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-500 ">
                                        {product.category}
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectOverview
