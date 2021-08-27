import shortid from "shortid"

export const fetchAllUser = () => {
    console.log('fetchAllUser')
}

export const fetchUserById = id => {
    console.log('fetchUserById')
}

export const updateUserById = is => {
    console.log('updateUserById')
}

export const x = 5

export const y = 'mango'
// export default {fetchAllUser, fetchUserById, updateUserById}

export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name
    }
    console.log(user)
}