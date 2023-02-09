import Cookies from 'js-cookie';

 export let userUUID = Cookies.get('uuid');

 export const updateUserUUID = (newUUID) => {
    userUUID = newUUID;
 }