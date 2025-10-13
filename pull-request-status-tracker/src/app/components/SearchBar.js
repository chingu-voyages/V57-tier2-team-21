export default function SearchBar (){
    return(
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
    );
};