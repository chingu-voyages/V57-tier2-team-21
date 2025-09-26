
export default function Home() {
  return (
    <div className="bg-auto w-screen h-screen bg-white">
      <h1 className="text-3xl text-black ml-2">Pull Request Status Board</h1>
      <h3 className="text-black ml-2">Track current pull requests waiting for review and completed PR history</h3>
    <div className="flex w-screen mt-10 mb-10">
          <div className="flex-none border-black max-w-80 p-5 ml-10 mr-5 bg-white outline-3 rounded">
              <p className="text-black">Pending Review</p>
              <p className="text-2xl text-black">4</p>
              <p className="text-sm text-gray-500">Pull Requests Awaiting Review</p>
          </div>
          <div className="flex-1 border-black max-w-80 p-5 mr-5 bg-white outline-3 rounded">
            <p className="text-black">Completed</p>
            <p className="text-2xl text-black">127</p>
            <p className="text-sm text-gray-500">Total Merged PRs</p>
          </div>
          <div className="flex-2 border-black max-w-80 p-5 mr-5 bg-white outline-3 rounded">
            <p className="text-black">Avg Review Time</p>
            <p className="text-2xl text-black">2.3d</p>
            <p className="text-sm text-gray-500">Time to Merge</p>
          </div>
          <div className="flex-3 border-black max-w-80 p-5 mr-5 bg-white outline-3 rounded">
            <p className="text-black">This Week</p>
            <p className="text-2xl text-black">8</p>
            <p className="text-sm text-gray-500">PRs merged this week</p>
          </div>
      </div>
      <div className="flex w-screen mb-10 border-black bg-white outline-3 rounded">
          <input type="text" className=" ml-5 flex-none border w-1/2 p-2 placeholder-gray-500" placeholder="Search for PRs, branches, authors..."></input>
          <select id="status" name="status" className=" flex-1 ml-5 border p-2 text-gray-500">
          <option>All statuses</option>
          <option>ToDo</option>
          <option>In progress</option>
          <option>Done</option>
        </select>
        <select id="repository" name="repository" className="flex-2 ml-5 border p-2 text-gray-500">
          <option>All repositories</option>
          <option>v57-tier02-team21</option>
          <option>v57-tier02-team22</option>
          <option>v57-tier02-team23</option>
          <option>v57-tier03-team24</option>
          <option>v57-tier03-team25</option>
        </select>
        </div>
        <div className="items-center justify-items-center">
          <label htmlFor="Toggle3" className="rounded-md cursor-pointer dark:text-gray-100">
            <input id="Toggle3" type="checkbox" className="w-screen mx-auto hidden peer" />
            <span className=" rounded-l-md dark:bg-violet-600 peer-checked:dark:bg-gray-700">Monthly</span>
            <span className="rounded-r-md dark:bg-gray-700 peer-checked:dark:bg-violet-600">Annually</span>
          </label>
          <button className="flex border-black bg-white outline-3 w-3/4 mb-5 rounded">
              <div className="flex-none">
                <h3 className="text-black">Add user authentication middleware for API endpoints</h3>
                <p className="text-gray-500">backend-api#1847•feature/auth-middleware</p>
              </div>
              <div className="flex-1">
                <p className="text-black text-right pr-2">Pending</p>
              </div>
            </button>
            <button className="flex border-black bg-white outline-3 w-3/4 mb-5 rounded">
              <div className="flex-none">
                <h3 className="text-black">Add user authentication middleware for API endpoints</h3>
                <p className="text-gray-500">backend-api#1847•feature/auth-middleware</p>
              </div>
              <div className="flex-1">
                <p className="text-black text-right pr-2">Pending</p>
              </div>
            </button>
            <button className="flex border-black bg-white outline-3 w-3/4 mb-5 rounded">
              <div className="flex-none">
                <h3 className="text-black">Add user authentication middleware for API endpoints</h3>
                <p className="text-gray-500">backend-api#1847•feature/auth-middleware</p>
              </div>
              <div className="flex-1">
                <p className="text-black text-right pr-2">Pending</p>
              </div>
            </button>
            <button className="flex border-black bg-white outline-3 w-3/4 mb-5 rounded">
              <div className="flex-none">
                <h3 className="text-black">Add user authentication middleware for API endpoints</h3>
                <p className="text-gray-500">backend-api#1847•feature/auth-middleware</p>
              </div>
              <div className="flex-1">
                <p className="text-black text-right pr-2">Pending</p>
              </div>
            </button>
            <button className="flex border-black bg-white outline-3 w-3/4 mb-5 rounded">
              <div className="flex-none">
                <h3 className="text-black">Add user authentication middleware for API endpoints</h3>
                <p className="text-gray-500">backend-api#1847•feature/auth-middleware</p>
              </div>
              <div className="flex-1">
                <p className="text-black text-right pr-2">Pending</p>
              </div>
            </button>
          </div>
    </div>
    
  );
}
