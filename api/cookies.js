import Cookies from 'js-cookie';
import { updateUserUUID } from './global_vars';
import { updateUserLandedOnPage } from './tracking';

export const checkIfUUIDCookieExist = () => {
    const uuid = Cookies.get('uuid');
    if( uuid ){
      updateUserLandedOnPage(uuid);
    } else {
      setUUIDCookie();
    }
}
  
export const setUUIDCookie = () => 
  fetch("http://localhost:3001/tracking/setUUID",{
      method: "POST",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==" //hard coded credentials for demo
      },
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
  }).then((data)=> {
    Cookies.set('uuid', data, { path: '' })
    updateUserUUID(data);
    updateUserLandedOnPage(data)
  })
  