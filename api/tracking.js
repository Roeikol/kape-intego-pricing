import { userUUID } from "./global_vars";

export const updateUserLandedOnPage = (uuid) => 
  fetch("http://localhost:3001/tracking/updateUserLandedOnPage",{
      method: "POST",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==" //hard coded credentials for demo
      },
      body: JSON.stringify( {
        uuid: uuid
      })
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
      }
      return response;
  }).then();

  export const updateUserClickedOnPackage = (packagedId) => 
  fetch("http://localhost:3001/tracking/updateUserClickedOnPackage",{
      method: "POST",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==" //hard coded credentials for demo
      },
      body: JSON.stringify( {
        uuid: userUUID,
        packagedId: packagedId
      })
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
      }
      return response;
  }).then();