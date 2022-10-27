import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-orange-300 p-3 rounded-md m-4'>
                <h1 className='font-bold text-2xl '>what is cors?</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='bg-orange-300 p-3 rounded-md m-4'>
                <h1 className='font-bold text-2xl '>Why are you using firebase?</h1>
                <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                <p>On the other hand, it offers google, facebook, github and many more authentication system</p>
            </div>
            <div className='bg-orange-300 p-3 rounded-md m-4'>
                <h1 className='font-bold text-2xl '>How does the private route work?</h1>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
            </div>
            <div className='bg-orange-300 p-3 rounded-md m-4'>
                <h1 className='font-bold text-2xl '>What is Node? How does Node work?</h1>
                <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
    );
};

export default Blog;