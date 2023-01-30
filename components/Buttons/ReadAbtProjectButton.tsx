import React from 'react'

interface IProps {
   handleFunc: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ReabAbtProjectButton: React.FC<IProps> = ({ handleFunc }) => {
   return (
      <>
         <button
            onClick={handleFunc}
            className="font-semibold tracking-widest border-b-2 border-Green pb-1 outline-none hover:text-Green focus:text-Green "
         >
            READ ABOUT PROJECT
         </button>
      </>
   )
}

export default ReabAbtProjectButton
