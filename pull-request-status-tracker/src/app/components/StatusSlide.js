export default function StatusSlide (){
    return(
        <div className="">
            <div className="flex flex-row justify-center my-4 text-sm tracking-tight font-medium text-gray-700">
                <p className="mx-3">Completed</p>
                <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input id="toggle" type="checkbox" className="hidden" />
                    <div className="w-10 h-3 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="toggle_dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                </div>
                </label> 
                <p className="mx-3">In progress</p>   
            </div>
        <div className="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center">
            <button id="In progress" className="border-black bg-white outline-3 w-3/4 ml-5 mb-5 p-2 rounded In progress hidden">
                <div className="flex mb-5">
                    <div className="flex-none">
                        <p className="text-black ml-10">Add user authentication middleware for API endpoints</p>
                        <p className="text-gray-500">backend-api#1847•feature/auth-middleware</p>
                    </div>
                    <div className="flex-1">
                        <p className="text-red-500 text-right pr-2">In Progress</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-none">
                        <div className="flex indent-10">
                            <div className="flex-none">
                                <p className="text-gray-500">Created by: sarah.chen</p>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-500">3 comments</p>
                            </div>
                        </div>
                <div className="flex">
                    <div className="flex-none">
                        <p className="text-gray-700">Reviewer:</p>
                    </div>
                    <div className="flex-1">
                        <div className="w-8 h-8 rounded-full 
                            bg-blue-500 text-gray-700 text-xl justify-center border-black">
                            A
                        </div>
                    </div>
                </div>
                </div>
                <div className="flex-1">
                    <p className="text-black text-right pr-2">372d ago</p>
                </div>
                </div>
        </button>
        <button className="border-black bg-white outline-3 w-3/4 ml-5 mb-5 p-2 rounded">
                <div className="flex mb-5">
                    <div className="flex-none">
                        <p className="text-black ml-10">Add user authentication middleware for API endpoints</p>
                        <p className="text-gray-500">backend-api#1847•feature/auth-middleware</p>
                    </div>
                    <div className="flex-1">
                        <p className="text-emerald-600 text-right pr-2">Completed</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-none">
                        <div className="flex indent-10">
                            <div className="flex-none">
                                <p className="text-gray-500">Created by: sarah.chen</p>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-500">3 comments</p>
                            </div>
                        </div>                    
                </div>
                <div className="flex">
                    <div className="flex-none">
                        <p className="text-gray-700">Reviewer:</p>
                    </div>
                    <div className="flex-1">
                        <div className="w-8 h-8 rounded-full 
                            bg-blue-500 text-gray-700 text-xl justify-center border-black">
                            A
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-black text-right pr-2">372d ago</p>
                </div>
            </div>

        </button>
        </div>
        </div>


    );

};