export default function StatusSlide (){
    return(
            <div className="flex justify-center">
                <label htmlFor="Toggle4" className="p-1 cursor-pointer dark:bg-gray-700 dark:text-gray-100">
                    <input id="Toggle4" type="checkbox" className="hidden peer"/>
                    <span className="px-4 py-2 dark:bg-gray-400 peer-checked:dark:bg-gray-700">In Progress</span>
                    <span className="px-4 py-2 dark:bg-gray-700 peer-checked:dark:bg-violet-600">Completed</span>
                </label>
            </div>
        );

};