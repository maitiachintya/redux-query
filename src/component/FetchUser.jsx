import React from 'react'
import { baseUrl } from '../api/Url_API'
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const api_Url = baseUrl;

const FetchUser = () => {
  let result = useQuery("users", () => axios.get(api_Url));
  console.log("Result", result);
  let { data, isLoading, isError, error } = result;
  if (isLoading) {
    return <h2>Data Loading...</h2>;
  }
  if (isError) {
    return <h2>{error?.message}</h2>;
  }
  return (
    <div>
      {data?.data.map((usr) => (
        <React.Fragment key={usr.id}>
          <p >{usr.name}</p>
          <Link to={`single/${usr.id}`}>Details</Link>
        </React.Fragment>
      ))}
    </div>
  )
}

export default FetchUser
