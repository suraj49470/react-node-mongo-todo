import { API_URL , PROFILE_ID } from "./constants";


export const fetchTodos =  async () => {
    try {
        const payload = await fetch(`${API_URL}/todos?profile_id=${PROFILE_ID}`);
        const { response } = await payload.json();
        return response;
    } catch (error) {
        throw error
    }
};

export const addTodo =  async (title) => {
    try {
        const todoPayload = {
            title,
            profile_id: PROFILE_ID,
            completed: false
        };
        console.log(todoPayload);
        const payload = await fetch(`${API_URL}/todos`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(todoPayload)
        });
        const { response } = await payload.json();
        return response;
    } catch (error) {
        throw error
    }
};

export const updateTodo =  async (todo) => {
    try {
        let todoPayload = {
            profile_id: PROFILE_ID,
        };
        todoPayload = {
            ...todoPayload,
            ...todo
        };
        console.log(todoPayload);
        const payload = await fetch(`${API_URL}/todos`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(todoPayload)
        });
        const { response } = await payload.json();
        return response;
    } catch (error) {
        throw error
    }
};

export const deleteTodo =  async (id) => {
    try {
        let todoPayload = {
            profile_id: PROFILE_ID,
            id
        };
        const payload = await fetch(`${API_URL}/todos`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(todoPayload)
        });
        const { response } = await payload.json();
        return response;
    } catch (error) {
        throw error
    }
};
