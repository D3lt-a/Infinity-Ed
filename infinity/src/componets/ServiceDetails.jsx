
function ServiceDetails() {
    return (
        <div>
            <div className="p-7 bg-slate-400">
                <div className="flex space-x-9">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Services</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Explain our comprehensive range of services designed to meet you need and exceed your expectations.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Discvover more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-row space-x-7 h-auto gird grid-cols-3">
                        <div className="max-w-xs p-4 h-fit bg-gray-50 rounded-lg shadow-md">
                            <div className="flex items-center justify-center h-12 w-12 bg-orange-100 rounded-full mb-4">
                                <div className="text-orange-600 text-xl">&lt;/&gt;</div>
                            </div>
                            <h3 className="text-sm w-96 font-semibold text-gray-800">Web development</h3>
                            <p className="text-gray-500 mt-2">
                                Subtract scrolling polygon resizing clip undo undo pixel st...
                            </p>
                            <div className="mt-4">
                                <span className="text-orange-600 text-xl">&rarr;</span>
                            </div>
                        </div>
                        <div className="max-w-xs p-4 h-fit bg-gray-50 rounded-lg shadow-md">
                            <div className="flex items-center justify-center h-12 w-12 bg-orange-100 rounded-full mb-4">
                                <div className="text-orange-600 text-xl">&lt;/&gt;</div>
                            </div>
                            <h3 className="text-sm w-96 font-semibold text-gray-800">Web development</h3>
                            <p className="text-gray-500 mt-2">
                                Subtract scrolling polygon resizing clip undo undo pixel st...
                            </p>
                            <div className="mt-4">
                                <span className="text-orange-600 text-xl">&rarr;</span>
                            </div>
                        </div>
                        <div className="max-w-xs p-4 h-fit bg-gray-50 rounded-lg shadow-md">
                            <div className="flex items-center justify-center h-12 w-12 bg-orange-100 rounded-full mb-4">
                                <div className="text-orange-600 text-xl">&lt;/&gt;</div>
                            </div>
                            <h3 className="text-sm w-96 font-semibold text-gray-800">Web development</h3>
                            <p className="text-gray-500 mt-2">
                                Subtract scrolling polygon resizing clip undo undo pixel st...
                            </p>
                            <div className="mt-4">
                                <span className="text-orange-600 text-xl">&rarr;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails
