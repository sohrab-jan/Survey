import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const items = [
    { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function PaginationLinks({meta,onPageClick}) {
    function onClick(ev,link){console.log(link);
        ev.preventDefault();
        if(!link.url){
            return;
        }
        onPageClick(link);
    }   

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 shadow-md mt-4">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    onClick={
                        ev=>onClick(ev,meta.links[0])}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    onClick={ev=>onClick(ev,meta.links[meta.links.lenght - 1])}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{meta.from}</span> to <span className="font-medium">{meta.to}</span> of{' '}
                        <span className="font-medium">{meta.total}</span> results
                    </p>
                </div>
                <div>
                      {meta.total >= 10 &&                     
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            {meta.links && meta.links.map((link,ind) => (
                                <a 
                                key={ind}
                                    href="#"
                                    onClick={(ev)=>onClick(ev,link)}
                                    aria-current="page"
                                    className={"relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:z-20 hover:bg-gray-50 "+(ind === 0 ? 'rounded-l-md ' : '') +(ind === meta.links.lenght - 1 ? 'rounded-r-md ' : '') + (link.active ? 'border-indigo-500 text-indigo-600 bg-indigo-500 ' : '')}
                                    dangerouslySetInnerHTML={{__html:link.label}}
                                >
                                </a>
                            ))}
                    </nav>} 
                </div>
            </div>
        </div>
    )
}
