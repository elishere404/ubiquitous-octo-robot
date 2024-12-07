import Header from './cmp/Header'
export default function Profile() {
  return (
    <>
    <Header />

    <div class="flex items-center justify-center h-screen bg-gradient-to-br">
   <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lRC1h92-thSZfNL19wb3_XY5sKDzhn4CYA&s" alt="product designer" />
     <h1 class="text-lg text-gray-700"> Andrew </h1>
     <p class="text-xs text-gray-400 mt-4"> My name is Andrew, i do lots of things - play games, programming, etc. I really enjoy it, reach out to me on Github or Email </p>
     <div className="flex flex-row justify-center items-center gap-4">
      <a href="https://github.com/elishere404"><img src="https://i.ibb.co/TRcfgCn/github.png" alt="github" /></a>
      <a href="mailto:hilariousaction@gmail.com"><img src="https://i.ibb.co/pLYtH3v/email.png" alt="gmail" /></a>
     </div>
   </div>
 </div>
    </>
  )
}
