import React from 'react'
import data from '../../data/data.json'
import SvgLinks from '../Links/SvgLinks'

interface IProps {
   header?: boolean
   footer?: boolean
}

const style = {
   header: 'flex flex-col items-center gap-4',
   footer: 'flex flex-col items-center gap-4 border-t pt-5 border-Grey sm:flex-row sm:justify-between sm:pl-2',
}

const Nav: React.FC<IProps> = ({ header, footer }) => {
   return (
      <div className={`${header ? style.header : style.footer}`}>
         {!header && <h1 className="font-bold text-md">SeyfettinBaskara</h1>}
         <ul className="flex items-center justify-around w-36 z-50">
            {data.links.map((link, index) => {
               return (
                  <li key={index}>
                     <a href={link.url} target="_blank" rel="noreferrer">
                        <SvgLinks icon={link.icon} />
                     </a>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default Nav
