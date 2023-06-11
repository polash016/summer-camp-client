import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyClasses = () => {
    const {user} = useAuth();
    const {data: classes = []} = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async() => {
           const res = await fetch(`http://localhost:5000/classes?instructor_email=${user?.email}`)
            console.log(res.data)
            return res.data;
        }
    })
    return (
        <div>
            {classes.length}
        </div>
    );
};

export default MyClasses;