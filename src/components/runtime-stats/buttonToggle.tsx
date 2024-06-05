import React, { useState } from 'react';
const activeButtonStyle =
  "border-3 text-black rounded-2xl p-2 text-sm font-semibold lg:font-bold \
  transition-all duration-500 bg-gradient-to-tl to-orange-300 to-[80%] \
  via-purple-800 from-blue-200 from-20% bg-size-200 bg-pos-0 \
  hover:bg-pos-100 uppercase";

const buttonStyle =
  "border-3 text-black me-4 rounded-2xl p-2 text-sm font-semibold \
  lg:font-bold transition-all duration-500 bg-gradient-to-tl via-orange-300 \
  from-purple-800 from-20% to-blue-200 to-[90%] bg-size-200 bg-pos-0 \
  hover:bg-pos-100";

  const ButtonToggle = ({
    handleClick1,
    handleClick2,
  }: {
    handleClick1: React.MouseEventHandler<HTMLButtonElement>;
    handleClick2: React.MouseEventHandler<HTMLButtonElement>;
  }) => {
    const [activeButton, setActiveButton] = useState<string>('Series');
  
    const handleButtonClick = (
      buttonName: string,
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      setActiveButton(buttonName);
      if (buttonName === 'Series') {
        handleClick1(event);
      } else {
        handleClick2(event);
      }
    };
  
    return (
      <div className="flex justify-center space-x-4">
        <button
          className={activeButton === 'Series' ? activeButtonStyle : buttonStyle}
          onClick={(event) => handleButtonClick('Series', event)}
        >
          Series
        </button>
        <button
          className={activeButton === 'Movies' ? activeButtonStyle : buttonStyle}
          onClick={(event) => handleButtonClick('Movies', event)}
        >
          Movies
        </button>
      </div>
    );
  };

export default ButtonToggle;
