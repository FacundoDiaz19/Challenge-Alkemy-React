import React, { useState } from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import HeroCards from "./HeroCards";





function Search() {
    const [error , setError] = useState(null);
    const [Results , setResults] = useState([]);

    const AccessToken = "4515526481799293";
    const SearchHero = async ({buscador}) => {
        try{
            const response = await axios.get(`https://superheroapi.com/api/${AccessToken}/search/${buscador}`)
            setResults(response.data.results)
            /* return console.log(response.data.results) */
            
        }
        catch(err){
            await setError(err.response.data.error)
            console.log(error.error)
        }
    }
   /*  console.log(Results) */
  return (
    <div className="Container">
      <div class="mb-3 form-floating">
        <Formik
            initialValues={{
                buscador: '',
            }}

        validate={(values)=>{
            let errores = {};

            if (!values.buscador) {
                errores.buscador = "Please enter a Name Hero";
              }

              if (values.buscador.length < 3 ) {
                errores.buscador = "Please enter more than 3 characters";
              }
              return errores
        }}  

        onSubmit={(values, { resetForm }) => {
            resetForm();
            SearchHero(values)
            
          }}
        >
        {({errors})=>(
            <Form>
            <p className=" mb-2 font-h1 text-center fs-2">Search your Hero...</p>
            <Field
              type="text"
              className="form-control search-input "
              name="buscador"
              id="floatingInput"
              placeholder="Search Your Hero.."
              
            />
            <ErrorMessage
                      name="buscador"
                      component={() => (
                        <div className="badge bg-danger ">{errors.buscador}</div>
                      )}
                    />
            <ErrorMessage
                      
                      component={() => (
                        <div className="badge bg-danger ">{error ? <div className="badge bg-danger ">{error.error}</div> : "" }</div>
                      )}
                    />
            </Form>
        )}
        </Formik>
        <div className="container mt-4">
            <HeroCards Heros={Results} />

        </div>
        
      </div>
    </div>
  );
}

export default Search;
