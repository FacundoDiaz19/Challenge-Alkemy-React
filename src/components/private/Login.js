import React,{useState,useEffect} from "react";
import axios from "axios";

function Login (){
    
    useEffect(()=>{
    

        const AccessToken = '4515526481799293'
        const Url = `https://superheroapi.com/api/4515526481799293/70`
       
        axios.get(Url).then((res)=>{
            const respuesta2 = res.data
            console.log(respuesta2)
        })
    
        /* axios
        .get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6da83076eb9a1ff375d6a8028ff4c981&hash=fbd14a4d5362e768583c77e38aebccc0")
           .then((res)=>{
             const respuesta = res.data.data.results;
             setResultado(respuesta);
             console.log(respuesta)
         })
         .catch(err => console.log(err))
     */
         
     },[])

    return (
    
        <div className="bg-dark ">
            <div className="d-flex conteiner bg-secondary" style={{width: 300 , height: 200}}>
                <div className="mx-auto p-3" style={{width: 200 , height: 200}}>
                    <form>
                            <div className="form-group">
                                <label>
                                    Ingrese su usuario
                                </label>
                                <input type="text"
                                    className="form-control" 
                                    id="mail"
                                    placeholder="usuario..."/>
                            </div>
                            <div className="form-group">
                                <label>
                                    Ingrese su contraseña
                                </label>
                                <input type="password"
                                    className="form-control" 
                                    id="contraseña"
                                    placeholder="contraseña"/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary form-control">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    
    )
}

export default Login;