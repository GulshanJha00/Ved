// "use client"
// import NotSigned from '@/app/NotSigned'
// import { SignedIn, SignedOut } from '@clerk/nextjs'
// import React, { useState } from 'react'

// const Page = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, user: 'Algorithm_Master', text: 'Welcome to DSA Chatroom! 🚀', time: '10:30 AM', type: 'system' },
//     { id: 2, user: 'CodeNinja', text: 'Just solved a binary tree problem!', time: '10:32 AM', type: 'user' },
//     { id: 3, user: 'DataStructureFan', text: 'Anyone want to discuss dynamic programming?', time: '10:35 AM', type: 'user' },
//   ])
//   const [inputMessage, setInputMessage] = useState('')

//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       const newMessage = {
//         id: messages.length + 1,
//         user: 'You',
//         text: inputMessage,
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         type: 'user'
//       }
//       setMessages([...messages, newMessage])
//       setInputMessage('')
//     }
//   }

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSendMessage()
//     }
//   }

//   return (
//     <>
//       <SignedIn>
//         <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
//           <div className="max-w-5xl mx-auto">
//             {/* Header */}
//             <div className="bg-slate-800 border-2 border-purple-500 rounded-t-lg p-4 shadow-lg shadow-purple-500/20">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono">
//                     {'<DSA_Chatroom />'}
//                   </h1>
//                   <p className="text-slate-400 text-sm mt-1 font-mono">// Connect with fellow algorithm enthusiasts</p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center gap-2 bg-slate-700 px-3 py-1 rounded-full">
//                     <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                     <span className="text-green-400 text-sm font-mono">Online</span>
//                   </div>
//                   <div className="text-slate-400 font-mono text-sm">
//                     <span className="text-purple-400">42</span> users
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Chat Container */}
//             <div className="bg-slate-800/50 border-x-2 border-purple-500 backdrop-blur-sm">
//               {/* Messages Area */}
//               <div className="h-[500px] overflow-y-auto p-4 space-y-4 custom-scrollbar">
//                 {messages.map((msg) => (
//                   <div
//                     key={msg.id}
//                     className={`flex ${msg.type === 'system' ? 'justify-center' : 'justify-start'}`}
//                   >
//                     {msg.type === 'system' ? (
//                       <div className="bg-purple-900/30 border border-purple-500/30 px-4 py-2 rounded-lg">
//                         <p className="text-purple-300 text-sm font-mono">{msg.text}</p>
//                       </div>
//                     ) : (
//                       <div className="max-w-[70%]">
//                         <div className="flex items-center gap-2 mb-1">
//                           <span className="text-purple-400 font-semibold text-sm font-mono">{msg.user}</span>
//                           <span className="text-slate-500 text-xs font-mono">{msg.time}</span>
//                         </div>
//                         <div className="bg-slate-700 border border-slate-600 rounded-lg p-3 shadow-lg">
//                           <p className="text-slate-200">{msg.text}</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* Input Area */}
//               <div className="border-t-2 border-purple-500/30 p-4 bg-slate-800/80">
//                 <div className="flex gap-3">
//                   <div className="flex-1 relative">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 font-mono text-sm pointer-events-none">
//                       &gt;_&lt;
//                     </span>
//                     <input
//                       type="text"
//                       value={inputMessage}
//                       onChange={(e) => setInputMessage(e.target.value)}
//                       onKeyPress={handleKeyPress}
//                       placeholder="Type your message..."
//                       className="w-full bg-slate-700 border-2 border-slate-600 focus:border-purple-500 rounded-lg px-10 py-3 text-slate-200 placeholder-slate-500 outline-none transition-all font-mono"
//                     />
//                   </div>
//                   <button
//                     onClick={handleSendMessage}
//                     className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 font-mono"
//                   >
//                     Send
//                   </button>
//                 </div>
//                 <p className="text-slate-500 text-xs mt-2 font-mono">
//                   // Press Enter to send • 
//                 </p>
//               </div>
//             </div>

//             {/* Footer Stats */}
//             <div className="bg-slate-800 border-2 border-t-0 border-purple-500 rounded-b-lg p-3 flex justify-around text-center shadow-lg shadow-purple-500/20">
//               <div>
//                 <p className="text-purple-400 font-mono text-xs">Topics</p>
//                 <p className="text-white font-bold font-mono">Arrays, Trees, Graphs</p>
//               </div>
//               <div className="border-l border-slate-600"></div>
//               <div>
//                 <p className="text-purple-400 font-mono text-xs">Active Now</p>
//                 <p className="text-white font-bold font-mono">42 Coders</p>
//               </div>
//               <div className="border-l border-slate-600"></div>
//               <div>
//                 <p className="text-purple-400 font-mono text-xs">Messages Today</p>
//                 <p className="text-white font-bold font-mono">1,337</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           .custom-scrollbar::-webkit-scrollbar {
//             width: 8px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-track {
//             background: #1e293b;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb {
//             background: #8b5cf6;
//             border-radius: 4px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//             background: #a78bfa;
//           }
//         `}</style>
//       </SignedIn>

//       <SignedOut>
//         <NotSigned />
//       </SignedOut>
//     </>
//   )
// }

// export default Page




"use client";
import React from "react";

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      {/* Logo / Icon */}
      <div className="mb-8 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Coming Soon!</h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-white/80 mb-8 text-center max-w-xl">
        We’re working hard behind the scenes to bring you something amazing. Stay tuned!
      </p>

      {/* Countdown placeholder */}
      <div className="flex space-x-4 mb-8">
        <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
          <p className="text-3xl font-bold">26th</p>
          <p className="text-sm">Date</p>

        </div>
        <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
          <p className="text-3xl font-bold">Oct</p>
          <p className="text-sm">Month</p>
        </div>
        
      </div>

    

     
    </div>
  );
};

export default ComingSoonPage;
