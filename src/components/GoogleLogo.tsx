import React from 'react';

const GoogleLogo: React.FC = () => {
  return (
    <div className="flex justify-center mb-8">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png"
        alt="Google"
        className="w-[272px] h-[92px]"
      />
    </div>
  );
};

export default GoogleLogo;