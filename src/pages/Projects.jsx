import Header from './cmp/Header'
export default function Projects() {
  return (
    <>
<Header />
<br />
<br />
<br />
<div className="flex flex-col items-start gap-4 ml-10 sm:ml-[40px]"> 
<div className="w-[70rem] h-[5rem] bg-gray-600 rounded-md flex items-center justify-between p-4">
  <h1 className="text-2xl font-semibold text-white">Chat App</h1>
  <button
    onClick={() => window.location.href = 'https://grizzled-coordinated-innocent.glitch.me/'}
    className="rounded-full border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  >
    Glitch link
  </button>
</div>

<div className="w-[70rem] h-[5rem] bg-gray-600 rounded-md flex items-center justify-between p-4">
  <h1 className="text-2xl font-semibold text-white">IP Lookup app</h1>
  <button
    onClick={() => window.location.href = 'https://tattered-easy-cloud.glitch.me/'}
    className="rounded-full border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  >
    Glitch link 
  </button>
</div>

</div>

    </>
  )
}
