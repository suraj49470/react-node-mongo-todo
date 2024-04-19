import { API_URL,PROFILE_ID} from "./constants";

export const getProfile = async () => {
    try {
        const payload = await fetch(`${API_URL}/profile?id=${PROFILE_ID}`,{
            type: 'GET'
        });
        const { response } = await payload.json();
        console.log(response);
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteProfile = async () => {
    try {
        const payload = await fetch(`${API_URL}/profile?id=${PROFILE_ID}`,{
            type: 'DELETE'
        });
        const { response } = await payload.json();
        console.log(response);
        return response;
    } catch (error) {
        throw error
    }
}

export const updateProfile = async (profile) => {
    try {
        const payload = await fetch(`${API_URL}/profile`,{
            type: 'PUT',
            body: JSON.stringify(profile)
        });
        const { response } = await payload.json();
        console.log(response);
        return response;
    } catch (error) {
        throw error
    }
}


export const createProfile = async (profile) => {
    try {
        const payload = await fetch(`${API_URL}/profile`,{
            type: 'POST',
            body: JSON.stringify(profile)
        });
        const { response } = await payload.json();
        console.log(response);
        return response;        
    } catch (error) {
        throw error;
    }
}