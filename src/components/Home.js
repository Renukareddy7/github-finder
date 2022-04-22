// import React,{useEffect,useState} from 'react'


//by fetch method
// const Home = () => {
//     let [state, setstate] = useState([]);
//     useEffect(() => {
//         window
//           .fetch("https://api.github.com/users", {
//             method: "GET",
//             headers: {
//               "content-type": "application/json",
//             },
//           })
//           .then(data => {
//             data.json().then(value => {
//               setstate(value);
//             });
//           })
//           .catch(err => console.log(err));
//     }, []);
//     console.log(state)
//     return <div>home</div>
  
// }

// export default Home

//by ajax method
// import React, { Fragment, useEffect, useState } from "react";

// const Home = () => {
//   let [state, setState] = useState([]);
//   useEffect(() => {
//       let xhr = new XMLHttpRequest();
//       //assign api and points

//       xhr.open("GET", "https://api.github.com/users");
//       xhr.onload = () => {
//           let users = JSON.parse(xhr.response);
//           setState(users)
//       };
//       xhr.send();
//   }, []);
//   console.log(state);
//     return(<div>
//         {state.length === 0 ? "loading" : state.map(user => {
//             return (
//               <Fragment key={user.id}>
//                 <li>
//                   <img src={user.avatar_url} alt={user.login} />
//                 </li>
//                 <li>{user.login}</li>
//               </Fragment>
//             );
//         })}
//     </div>
//     );
// };

// export default Home;



//axios method
// import React, { Fragment, useEffect, useState } from "react";
// import axios from "axios";

// const Home = () => {
//   let [state, setState] = useState([]);
//   useEffect(() => {
//       axios
//         .get("https://api.github.com/users")
//         .then(data => {
//           let payload = data.data;
//           setState(payload);
//         })
//         .catch(err => console.log(err));
//   }, []);
//   console.log(state);
//   return (
//     <div>
//       {state.length === 0
//         ? "loading"
//         : state.map(user => {
//             return (
//               <Fragment key={user.id}>
//                 <li>
//                   <img src={user.avatar_url} alt={user.login} />
//                 </li>
//                 <li>{user.login}</li>
//               </Fragment>
//             );
//           })}
//     </div>
//   );
// };

// export default Home;



//same ex using async and await instead of featch  most recomended way

// import React, { Fragment, useEffect, useState } from "react";
// import axios from "axios";

// const Home = () => {
//   let [state, setState] = useState([]);
//   useEffect(() => {
//       let fetchdata = async () => {
//           try {
//               let users = await axios.get("https://api.github.com/users");
//               setState(users.data)
//           }catch(err) {
//            console.log(err)
//        }
//       }
//       fetchdata();
//   }, []);
//   console.log(state);
//   return (
//     <section className="gitrepo">
      
//         {state.length === 0
//           ? "loading"
//           : state.map(user => {
//               return (
               
//                   <div  className="usergrid">
                    
//                       <img
//                         src={user.avatar_url}
//                         alt={user.login}
//                         style={{ width: "343px", height: "450px" }}
//                       />
                    
//                     <p>{user.login}</p>
//                     <p>{user.html_url}</p>
//                   </div>
             
//               );
//             })}
      
//     </section>
//   );
// };

// export default Home;

//On the internet, a Query string is the part of a link (otherwise known as a hyperlink or a uniform resource locator, URL for short) which assigns values to specified attributes (known as keys or parameters).


// import React,{useState} from 'react'
// import MainContent from './MainContent';
// import Search from './Search';
// import Axios from '../apis/Axios'
// import { useEffect } from 'react';
// const Home = () => {
//     let [user, setuser] = useState("");
//     let [repos, setrepose] = useState([]);
//     let [loading, setloading] = useState(false)
    
//     useEffect(() => {
//         let featchData = async () => {
//             try {
//                 let Client_id = "Iv1.17098dd06f36e089";
//                 let Client_secret = "48ec580a9dc8689eadd599752fd2940f77113cf8";
//                 let users = await Axios.get(
//                     `/users/amrutasadalgi?Client_id ${Client_id}&Client_secret${Client_secret}`
//                 );
//                 let ReposeData = await Axios.get(
//                     `/users/amrutasadalgi?Client_id ${Client_id}&Client_secret${Client_secret}`
//                 );
//                 setloading(true);
//                 setuser(users.data);
//                 setrepose(ReposeData.data);
//             } catch (err) {
//                 console.log(err);
//             }
//             setloading(false);
            
             
//         };
//         featchData();
//      },[])
    
//     let ontermsubmit = async term => {
//         try {
//             let Client_id = "Iv1.17098dd06f36e089";
//             let Client_secret = "48ec580a9dc8689eadd599752fd2940f77113cf8";
//             let users = await Axios.get(`/users/${term}?Client_id ${Client_id}&Client_secret${Client_secret}`);
//             let ReposeData = await Axios.get(
//               `/users/${term}?Client_id ${Client_id}&Client_secret${Client_secret}`
//             );
//             setloading(true);
//             setuser(users.data);
//             setrepose(ReposeData.data)
//         } catch (err) {
//             console.log(err)
//         }
//         setloading(false)
//     };
    
//   return (
//     <div id="mainBlock">
//       <article>
//               <Search ontermsubmit={ontermsubmit} user={user} loading={loading}/>
//               <MainContent user={user} loading={loading} repos={repos}/>
//       </article>
//     </div>
//   );
// }

// export default Home

import React, { useState, useEffect } from "react";
import Search from "./Search";
import MainContent from "./MainContent";
import Axios from "../apis/Axios";
const Home = () => {
  let [user, setUser] = useState("");
  let [repos, setRepos] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let client_id = "Iv1.8fab848122a7e6c5";
        let client_secret = "68ed8f7c00786dfb861b1cf63668e047b33392cf";
        let users = await Axios.get(
          `/users/Renukareddy7?Client_id${client_id}&Client_secret${client_secret}`
        );

        let ReposData = await Axios.get(
          `/users/Renukareddy7/repos?Client_id${client_id}&Client_secret${client_secret}`
        );
        setLoading(true);
        setUser(users.data);
        setRepos(ReposData.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  let onTermSubmit = async term => {
    try {
      let client_id = "Iv1.8fab848122a7e6c5";
      let client_secret = "68ed8f7c00786dfb861b1cf63668e047b33392cf";
      let users = await Axios.get(
        `/users/${term}?Client_id${client_id}&Client_secret${client_secret}`
      );

      let ReposData = await Axios.get(
        `/users/${term}/repos?Client_id${client_id}&Client_secret${client_secret}`
      );
      setLoading(true);
      setUser(users.data);
      setRepos(ReposData.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <section id="mainBlock">
      <article>
        <Search onTermSubmit={onTermSubmit} user={user} loading={loading} />
        <MainContent user={user} loading={loading} repos={repos} />
      </article>
    </section>
  );
};

export default Home;
