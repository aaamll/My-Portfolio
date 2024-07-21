export default function projects(){
    return(
        <>
           <h1 className="text-center text-6xl my-10 font-[1000] text-blue-900">"My Projects"</h1>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2  gap-4 my-5">
               <img src="Screenshot_17-7-2024_23932_.jpeg" alt="TicTakToe" />
             <div className="mx-3 text-white">
                <h1 className="text-3xl my-5 font-serif text-center" id="h1-Text">Tic Tac Toe Game(using js)</h1>
                <h1 className="text-xl my-10 leading-snug">This project demostarte some JavaScript like array usage, DOM , conditionals logic e.t.c ,Technologies used are <ul>
                <li>HTML</li>    
                <li>CSS</li>    
                <li>JavaScript</li>    
                </ul></h1>
                <a  
                className="bg-sky-800  p-3 rounded-md  my-10" href="https://6692b79ba9380d4f40bd01cf--sweet-sopapillas-262519.netlify.app/"
                >Visit Website</a>
                 <a 
                className="bg-red-800 ms-2 p-3 rounded-md  my-10 " href="https://github.com/aaamll/TicTacToe.git"
                >Source Code</a>
             </div>
           </div>
           <hr />
           <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2  gap-4 my-5">
               <img src="Screenshot_18-7-2024_83330_.jpeg" alt="BubbleGame" />
             <div className="mx-3 text-white">
                <h1 className="text-3xl my-5 font-serif text-center" id="h1-Text">Bubble Number Game(using js)</h1>
                <h1 className="text-xl my-10 leading-snug">This project demostarte some JavaScript like bubble events,jsx,DOM ,localStorage e.t.c , Technologies used are<ul>
                <li>HTML</li>    
                <li>CSS</li>    
                <li>JavaScript</li>    
                </ul></h1>
                <a
                className="bg-sky-800  p-3 rounded-md  my-10" href="https://6692ade8f556654d5f6847ca--beautiful-licorice-d0e81f.netlify.app/"
                >Visit Website</a>
                 <a
                className="bg-red-800 ms-2 p-3 rounded-md  my-10 " href="https://github.com/aaamll/bubbleGame.git"
                >Source Code</a>
             </div>
           </div>
           <hr/>
           <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2  gap-4 my-5">
               <img src="Du-Avatar.jpeg" alt="BubbleGame" />
             <div className="mx-3 text-white">
                <h1 className="text-3xl my-5 font-serif text-center" id="h1-Text">Du Avatar</h1>
                <h1 className="text-xl my-10 leading-snug">Technologies used: <ul>
                <li>HTML</li>    
                <li>CSS</li>    
                <li>JavaScript</li>    
                </ul></h1>
                
                <a
                className="bg-sky-800  p-3 rounded-md  my-10" href=""
                >Visit Website</a>
                 <a
                className="bg-red-800 ms-2 p-3 rounded-md  my-10 " href=""
                >Source Code</a>
             </div>
           </div>
           <hr/>
           <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2  gap-4 my-5">
               <img src="api.png" alt="api_project" />
             <div className="mx-3 text-white">
                <h1 className="text-3xl my-5 font-serif text-center" id="h1-Text">A.P.I related project</h1>
                <h1 className="text-xl my-10 leading-snug">Demostrating server-side rendering in Next.js , Technologies used are<ul>
                <li>Next.js</li> 
                <li>inline CSS( for styling)</li>  
                <li>jsonPlaceholder A.P.I</li>    
                </ul></h1>
                
                <a
                className="bg-sky-800  p-3 rounded-md  my-10" href="https://tangerine-seahorse-46fad0.netlify.app/"
                >Visit Website</a>
                 <a
                className="bg-red-800 ms-2 p-3 rounded-md  my-10 " href="https://github.com/aaamll/ssr2"
                >Source Code</a>
             </div>
           </div>
        </>
    )
}