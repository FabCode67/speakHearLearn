import React, { ReactNode } from 'react'; // Import ReactNode type

type MainContentProps = {
  children?: ReactNode; // Define children prop as optional
};

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <div className="w-3/4 bg-blue-700 min-h-screen">
    <div className="tt text-white flex justify-center text-center m-auto">MUGWANEZA</div>
    </div>
  );
};

export default MainContent;
