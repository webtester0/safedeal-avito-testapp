import React, { useState } from 'react';
import { InputForm } from './style';
import { Input } from '@molecules/Input';
import axios from 'axios';

interface FormProps {
    id?: number;
}

export const Form: React.FC<FormProps> = ({ id }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const submitCommit = (id, name, comment) => {
        axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
            name: `${name}`,
            comment: `${comment}`
        });
    };

    const handleChangeName = event => {
        setName(event.target.value);
    };

    const handleChangeComment = event => {
        setComment(event.target.value);
    };

    const handleSubmit = event => {
        submitCommit(id, name, comment);
        event.preventDefault();
        setName('');
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputForm>
                <Input placeholder={'Ваше имя'} value={name} onChange={handleChangeName} />
            </InputForm>
            <InputForm>
                <Input
                    placeholder={'Ваш комментарий'}
                    value={comment}
                    onChange={handleChangeComment}
                />
            </InputForm>
            <Input type={'submit'} value={'Оставить комментарий'} />
        </form>
    );
};
