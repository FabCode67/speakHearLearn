import   { useState } from "react";
const Help = () => {
  const contents = [
    {
      image:
        "https://media.istockphoto.com/id/1478313319/photo/male-lion.jpg?b=1&s=170667a&w=0&k=20&c=plYvl6Dft0rG-caolRQfeKM7VKW0J4OmhpEe_AH6EP0=",
      lists: {
        list1: "Cow",
        list2: "Hen",
        list3: "Lion",
        list4: "Horse",
        list5: "Sheep",
      },
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/04/19/13/two-706896_1280.jpg",
      lists: {
        list1: "Three",
        list2: "One",
        list3: "Four",
        list4: "Two",
        list5: "Five",
      },
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false); // Track if the button has been clicked

  const handleNextClick = () => {
    setSelectedLabel("");
    setButtonClicked(false);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  const currentContent = contents[currentImageIndex];

  const correctAnswers = ['Lion', 'Two'];

  const handleLabelSelect = (label: string) => {
    if (buttonClicked) {
      return; // Prevent selecting labels after clicking the submit button
    }

    if (correctAnswers.includes(label)) {
      setSelectedLabel(label);
    } else {
      setSelectedLabel("Incorrect");
    }
  };

  const handleSubmitClick = () => {
    setButtonClicked(true);
    // You can update the text color here based on the correctness
    // For example, you can add a CSS class to change the color
  };

  return (
    <div className="tt text-white flex justify-center text-center m-auto fle flex-col">
      <div className="flex w-full justify-center my-auto items-center text-center space-x-6">
        <div className="flex flex-col justify-center items-center w-[30rem] h-[30rem] bg-blue-300">
          <img src={currentContent.image} alt="" className="h-[100%] w-[100%]" />
        </div>
        <div className="radio_lists_container flex flex-col space-y-5" id="radio_lists">
          {Object.values(currentContent.lists).map((label, index) => (
            <ul className="radio_lists" key={index}>
              <li className={`radio flex space-x-3 ${selectedLabel === label ? (correctAnswers.includes(label) ? ' text-orange-600 ' : 'bg-red-500 ') : ' '}`}>
                <input
                  type="radio"
                  id={`radio_${index}`}
                  name="radio"
                  value={label}
                  className="h-5 w-5 flex justify-between my-auto cursor-pointer"
                  onChange={() => handleLabelSelect(label)}
                />
                <label htmlFor={`radio_${index}`} className="radio">
                  {label}
                </label>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className=" flex justify-between mt-8">
        <button type="button" className={`submit p-3 px-5 w-fit flex ${buttonClicked ? 'bg-gray-400' : 'bg-orange-600'} text-white rounded-md`} onClick={handleSubmitClick}>
          {buttonClicked ? 'Submitted' : 'Submit'}
        </button>
        <button
          type="button"
          className="submit p-3 px-5 w-fit flex border text-white rounded-md"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Help;
