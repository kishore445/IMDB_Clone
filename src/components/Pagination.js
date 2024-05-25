import React from 'react'

const Pagination = ({onprev,onNext,currpage}) => {
  return (
    <div className="flex justify-center items-center gap-4 bg-black" >
        <button onClick={onprev}
        className="  m-4 p2 rounded-lg text-white hover:scale-110 duration-100" >{"<<"}Previous </button>
        <div className="   text-white" >{currpage}</div>
        <button onClick={onNext}
        className="  m-4 p2 rounded-lg text-white hover:scale-110 duration-100" >Next{">>"}</button>
    </div>
  )
}

export default React.memo(Pagination);