import React, { useState } from "react";
import { useNavigate } from "react-router";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("books");
    setIsVisible(false);
  };
  return (
    <div className="relative min-h-[75vh]">
      <div
        className={`hero bg-base-200 min-h-[75vh] absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="hero-content text-center">
          <div className="flex items-center justify-center min-h-[75vh] bg-base-200 px-6">
            <div className="max-w-md bg-white shadow-2xl rounded-2xl p-8 space-y-6">
              <h1 className="text-5xl font-bold text-primary">
                <span className="special-gothic-expanded-one-regular">“</span>Boi Poka
                <span className="special-gothic-expanded-one-regular">”</span>
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                Books are more than paper and ink — they are time machines,
                mentors, and windows to other worlds. Each one holds the voice
                of someone who once dared to dream, think, question, or feel
                deeply.
                <br />
                <span className="italic text-secondary block mt-4">
                  “A reader lives a thousand lives before he dies... The man who
                  never reads lives only one.” — George R.R. Martin
                </span>
              </p>
              <button
                className="btn btn-primary w-full"
                onClick={handleNavigate}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
