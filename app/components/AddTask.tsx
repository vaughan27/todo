"use client";

import {AiOutlinePlus} from 'react-icons/ai';
import Modal from './Modal';
import { FormEventHandler, useState } from "react";
import { addTodo } from '@/api';
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>("");

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = 
    async(e) => {
        e.preventDefault();
        console.log(newTaskValue);
        await addTodo({
            id: uuidv4(),
            text: newTaskValue

        })
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    }
    return <div>
        <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
            Add New Task
            <AiOutlinePlus size={20} className='ml-2'/>
        </button>

        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} > 
        <h3 className="font-bold text-lg">Add New Task!</h3>
            <form onSubmit={handleSubmitNewTodo}>
                <div className='modal-action'>
                <input 
                    type="text" 
                    placeholder="Type here" 
                    value={newTaskValue}
                    onChange={e => setNewTaskValue(e.target.value)}
                    className="input input-bordered w-full w-full" 
                />
                <button type='submit' className='btn'>Submit</button>
                </div>
            </form>
        </Modal>
    </div>
};

export default AddTask;