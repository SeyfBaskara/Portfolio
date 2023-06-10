interface IProps {
   techStack: string[]
}

const Technologies: React.FC<IProps> = ({ techStack }) => {
   return (
      <section aria-label="technologies" className="relative overflow-hidden p-4 mt-10 pb-14 sm:mt-0">
         <div className="md:w-11/12 md:m-auto lg:w-4/5">
            <ul className="border-b border-t py-10 flex flex-wrap items-center justify-center gap-6 sm:py-20 md:border-b-0">
               {techStack.map((tool, index) => (
                  <li key={index} className="text-[1.7rem] font-semibold basis-[8rem] md:text-[2rem]">
                     {tool}
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}

export default Technologies
