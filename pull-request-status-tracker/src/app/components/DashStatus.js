export default function StatusBar(){
    return(
        <div className="flex w-screen items-stretch mt-10 mb-10">
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
    );
};