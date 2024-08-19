
function ServiceDetails(){
    const services = [
    { title: 'Web development', icon: '🖥️', description: 'Subtract scrolling polygon resizing clip undo undo pixel st...' },
    { title: 'System analysis', icon: '📂', description: 'Subtract scrolling polygon resizing clip undo undo pixel st...' },
    { title: 'Data protection', icon: '🔒', description: 'Subtract scrolling polygon resizing clip undo undo pixel st...' },
    { title: 'Audit & consultancy', icon: '📝', description: 'Subtract scrolling polygon resizing clip undo undo pixel st...' },
    { title: 'Networking', icon: '🌐', description: 'Subtract scrolling polygon resizing clip undo undo pixel st...' },
    { title: 'Graphic design', icon: '🎨', description: 'Subtract scrolling polygon resizing clip undo undo pixel st...' },
    ];
  return (
    <section className="bg-white p-8">
      <div className="max-w-6xl bg-gray-100 rounded-lg p-2 mx-auto flex flex-col lg:flex-row items-start lg:items-center">
        <div className="lg:w-1/3 ml-7 mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 mb-6">
            Explore our comprehensive range of services designed to meet your needs and exceed your expectations.
          </p>
          <a href="#" className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-600 inline-block">
            Discover More &gt; 
          </a>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className=" p-1 text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-950 mb-2">{service.title}</h3>
              <p className="text-blue-950">{service.description}</p>
              <div className="">
                <a href="#" className="text-blue-950 font-bold hover:text-orange-600 text-lg">→</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;