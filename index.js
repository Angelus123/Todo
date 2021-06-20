import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import App from './Auth/UserAuth';
import axios from 'axios'
axios.defaults.baseURL ='https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
axios.defaults.headers.post['Content-type'] ='application/json'
axios.interceptors.request.use(request =>{
    console.log('......', request)
    return request
},
error => {
    console.log('..response....',error)
    return Promise.reject(error)
})

axios.interceptors.response.use(response =>{
    console.log('......', response)
    return response
},
error => {
    console.log('..response....',error)
    return Promise.reject(error)
}
)

const app =(

         <BrowserRouter>
        <App />
    </BrowserRouter>
  
   
    
)
ReactDOM.render( app, document.getElementById( 'root' ) );
