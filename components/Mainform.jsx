const Mainform = () => {
  return (
    <section className="bg-emerald-400 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Form header */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-zinc-700 sm:text-5xl md:text-6xl">
            Find better chance
          </h1>
          <p className="my-4 text-xl text-zinc-700">
            Find subjects with your needs
          </p>
        </div>

        <form
          action=""
          className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"
        >
          {/* Choose location */}
          <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="location" className="sr-only">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Choose location"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-emerald-500"
            />
          </div>

          {/* Select */}
          <div>
          <label htmlFor="property-type" className="sr-only">Тип жилья</label>
            <select
              id="property-type"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-emerald-500"
            >
              <option value="All">All</option>
              <option value="Apartment">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="Condo">Condo</option>
              <option value="House">House</option>
              <option value="Cottage">Cottage</option>
              <option value="Bed">Bed</option>
              <option value="Room">Room</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-amber-300 text-zinc-700 hover:bg-amber-400 focus:outline-none focus:ring focus:ring-emerald-500"
          >
            Go!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Mainform;
