import { useEffect, useState } from 'react';

export default function Typewriter(){
  const [text, setText] = useState<string>('');
  const phrases: string[] = ['Unlock Your Creative Melody'];
  const delay: number = 100; // Delay between each character in milliseconds
  const eraseDelay: number = 1500; // Delay before erasing the text

  let phraseIndex: number = 0;
  let charIndex: number = 0;
  let isErasing: boolean = false;

  useEffect(() => {
    const type = () => {
      const currentPhrase: string = phrases[phraseIndex];
      if (!isErasing) {
        setText((prevText) => prevText + currentPhrase[charIndex]);
        charIndex++;

        if (charIndex === currentPhrase.length) {
          isErasing = true;
          setTimeout(() => {
            isErasing = false;
            setText(currentPhrase.substring(0, charIndex));
            charIndex = 0;

            setTimeout(() => {
              phraseIndex = (phraseIndex + 1) % phrases.length;
              type();
            }, eraseDelay);
          }, delay);
        } else {
          setTimeout(type, delay);
        }
      } else {
        setText((prevText) => prevText.substring(0, prevText.length - 1));

        if (text === '') {
          isErasing = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, delay);
        } else {
          setTimeout(type, delay);
        }
      }
    };

    type();
  }, []);

  return <h1 className="text-4xl md:text-5xl font-bold mb-4">{text}</h1>;
};

