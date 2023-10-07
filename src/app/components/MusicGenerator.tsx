
import React, { useEffect, useState } from 'react';

export default function MusicGenerator () {
  const [formData, setFormData] = useState({
    genre: '',
    topic: '',
    mood: '',
    style: '',
    keywords: '',
  });

    const [generatedLyrics, setGeneratedLyrics] = useState('');
   
    useEffect(() => {
      const textarea = document.getElementById('response');
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [generatedLyrics]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Replace this with your actual API call to generate lyrics
      const { genre, topic, mood, style, keywords } = formData;

      // Construct a prompt for the AI model
      const prompt = `Generate lyrics for a ${genre} song with the theme of ${topic}. The mood should be ${mood}, and the style should be ${style}. Include keywords: ${keywords}`;

      const response = await fetch('https://lyricist-backend-q3wg.onrender.com/generateText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (response.ok) {
    const data = await response.json();
    setGeneratedLyrics(data.output); 
  } else {
    console.error('Error:', response.statusText);
  }
      }

    return (
      <div className="container mx-auto py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">AI Lyrics Generator</h1>
        <p className="text-lg md:text-xl  mb-8">
          Enter the details to generate AI-powered lyrics:
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2">Genre</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="genre"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="e.g., Pop, Rock, Hip-Hop"
            />
          </div>

          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2">Topic</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="topic"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="e.g., Love, Nature, Dreams"
            />
          </div>

          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2">Mood</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="mood"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="e.g., Happy, Sad, Energetic"
            />
          </div>

          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2">Style</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="style"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="e.g., Romantic, Upbeat, Melancholic"
            />
          </div>

          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2">
              Main Keywords (comma-separated)
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              name="keywords"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="e.g., love, sunset, dreams"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105"
          >
            Generate Lyrics
          </button>
        </form>

        {/* Response Text Area */}
        {generatedLyrics && (
          <div className="mt-8">
            <label
              htmlFor="response"
              className="block  text-3xl font-bold mb-2"
            >
              Generated Lyrics
            </label>
            <textarea
              id="response"
              className="w-full h-40 px-3 py-2 rounded-lg text-white border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 resize-y block"
              readOnly
              value={generatedLyrics}
            ></textarea>
          </div>
        )}
      </div>
    );
}



//   // return (
//     <div className="container mx-auto py-16 text-center">
//       <h1 className="text-4xl md:text-5xl font-semibold mb-4">AI Lyric Generator</h1>
//       <p className="text-lg md:text-xl  mb-8">
//         Enter the details to generate AI-powered lyrics:
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-md mx-auto"
//       >
//          <div className="mb-4">
//             <label  className="block  text-sm font-bold mb-2">Genre</label>
//             <input type="text" onChange={handleInputChange} name="genre" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200" placeholder="e.g., Pop, Rock, Hip-Hop" />
//         </div>

//         <div className="mb-4">
//             <label  className="block  text-sm font-bold mb-2">Topic</label>
//             <input type="text" onChange={handleInputChange} name="topic" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200" placeholder="e.g., Love, Nature, Dreams" />
//         </div>

       
//         <div className="mb-4">
//             <label  className="block  text-sm font-bold mb-2">Mood</label>
//             <input type="text" onChange={handleInputChange} name="mood" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200" placeholder="e.g., Happy, Sad, Energetic" />
//         </div>

   
//         <div className="mb-4">
//             <label  className="block  text-sm font-bold mb-2">Style</label>
//             <input type="text" onChange={handleInputChange} name="style" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200" placeholder="e.g., Romantic, Upbeat, Melancholic" />
//         </div>

     
//         <div className="mb-4">
//             <label className="block  text-sm font-bold mb-2">Main Keywords (comma-separated)</label>
//             <input type="text" onChange={handleInputChange} name="keywords" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200" placeholder="e.g., love, sunset, dreams" />
//         </div>


//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105"
//         >
//           Generate Lyrics
//         </button>
//       </form>

//       {/* Response Text Area */}
//       {generatedLyrics && (
//         <div className="mt-8">
//           <label
//             htmlFor="response"
//             className="block  text-sm font-bold mb-2"
//           >
//             Generated Lyrics
//           </label>
//           <textarea
//             id="response"
//             className="w-full h-40 px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
//             readOnly
//             value={generatedLyrics}
//           ></textarea>
//         </div>
//       )}
//     </div>
//   );
// };

