import React from 'react'
import {MdOutlinePushPin} from "react-icons/md";
import {MdCreate, MdDelete} from "react-icons/md";
import moment from 'moment'

const NoteCard = ({title, date, content, tags, isPinned, onEdit, onDelete, onPinNote,}) => {

    return (
        <div className='border-[0.1px] rounded p-4 bg-white hover:shadow-xl transtion-all ease-in-out'>
            <div className='flex items-right justify-between'>
                <div>
                    <h6 className='text-sm font-medium'>{title}</h6>
                    <span className='text-xs text-slate-500'>{moment(date).format('Do MMM YYYY')}</span>
                </div>

                <MdOutlinePushPin 
                    className= {`icon-btn ${isPinned ? 'text-[var(--primary)]' : 'text-slate-300'}`}
                    onClick={onPinNote}
                    />
            </div>

            <p className='text-xs text-slate-700 mt-2 truncate overflow-hidden whitespace-nowrap text-ellipsis'>{content}</p>

            <div className='flex items-center justify-between mt-2'>
                <div className='text-xs text-slate-400 flex flex-wrap gap-1 truncate'>{tags.map((item, index) => (
                        <span key={index}>#{item}</span>
                    ))}</div>
                <div className='flex items-center gap-2'>
                    <MdCreate 
                         className='icon-btn hover:text-green-600'
                        onClick={onEdit}
                        />
                    <MdDelete 
                        className='icon-btn hover:text-red-500'
                        onClick={onDelete}
                        />
                </div>
            </div>
        </div>
    );
}

export default NoteCard;