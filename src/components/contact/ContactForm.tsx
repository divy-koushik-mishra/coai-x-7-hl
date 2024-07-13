
const ContactForm = () => {
  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-md">
      <form>
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" className="mt-1 outline-none block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" className="mt-1 block outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">College Name</label>
            <input type="text" className="mt-1 block outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Does your college have a coding club or community?</label>
            <div className="mt-2 space-y-2">
              <label className="inline-flex items-center">
                <input type="radio" name="coding_club" value="yes" className="form-radio text-indigo-600" />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="coding_club" value="no" className="form-radio text-indigo-600" />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 block outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Topics of Interest</label>
            <div className="mt-2 space-y-2 flex flex-col">
              <label className="inline-flex items-center">
                <input type="checkbox" value="AI" className="form-checkbox text-indigo-600" />
                <span className="ml-2">Artificial Intelligence</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" value="ML" className="form-checkbox text-indigo-600" />
                <span className="ml-2">Machine Learning</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" value="DL" className="form-checkbox text-indigo-600" />
                <span className="ml-2">Deep Learning</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" value="DS" className="form-checkbox text-indigo-600" />
                <span className="ml-2">Data Science</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" value="NLP" className="form-checkbox text-indigo-600" />
                <span className="ml-2">Natural Language Processing</span>
              </label>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm