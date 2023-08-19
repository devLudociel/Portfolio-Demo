// next Image

import Image from "next/image";

const Avatar = () => {
  return (
  <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/Avatar1.png'} width={438} height={570} alt="Avatar" className="translate-y-20 w-full h-full"/>
  </div>
  );
};

export default Avatar;
