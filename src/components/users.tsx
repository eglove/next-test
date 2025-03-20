'use client';
import {useQuery} from "@tanstack/react-query";
import {queries} from "@/queries/queries";

export const Users = () => {
    const usersQuery = useQuery(queries.getUsers())

    return <div><div>users</div>{usersQuery.data?.map(user => {
        return (
            <div key={user.id}>{user.name}</div>
        )
    })}</div>
}