import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white font-sans">
      <main className="bg-white flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl text-black p-2">Pull Request Status Board</h1>
        <h3 className="text-black p-2">Track current pull requests waiting for review and completed PR history</h3>
        <div className="border-black w-1/4 h-1/2 bg-white outline-3 rounded p-2">
          <p className="text-black">Pending Review</p>
          <p className="text-2xl text-black">4</p>
          <p className="text-gray-500">Pull Requests Awaiting Review</p>
        </div>
        <div className="border-black w-1/4 h-1/2 bg-white outline-3 rounded p-2">
          <p className="text-black">Completed</p>
          <p className="text-2xl text-black">127</p>
          <p className="text-gray-500">Total Merged PRs</p>
        </div>
        <div className="border-black w-1/4 h-1/2 bg-white outline-3 rounded p-2">
          <p className="text-black">Avg Review Time</p>
          <p className="text-2xl text-black">2.3d</p>
          <p className="text-gray-500">Time to Merge</p>
        </div>
        <div className="border-black w-1/4 h-1/2 bg-white outline-3 rounded p-2">
          <p className="text-black">This Week</p>
          <p className="text-2xl text-black">8</p>
          <p className="text-gray-500">PRs merged this week</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
