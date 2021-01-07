import { useEffect } from "react";
import axios from 'axios';
import parse from 'html-react-parser';
import Cast from '../../components/cast';
import Error from 'next/error';

const ShowDetails = ({show, statusCode}) => {
    if(statusCode){
        return <Error statusCode={statusCode} />
    }
    const { name, image, summary, _embedded } = show;
    useEffect(() => {
        axios.get('http://api.tvmaze.com/schedule?country=IE&date=2020-01-06')
            .then(response => console.log(response.data))
    },[])
    return (
        <div className="show-details">
            <div 
                className="show-details__poster" 
                style={{ backgroundImage: `url(${image.original})` }}
            ></div>
            <h1>{name}</h1>
            {parse(summary)}
            { _embedded.cast.length > 0 && <Cast cast={_embedded.cast} />  }
            <style jsx>{`
            .show-details__poster {
                height: 200px;
                background-size: cover;
            }
            `}</style>
        </div>)
}



export default ShowDetails;

export const getServerSideProps = async ({query}) => {
    try{
        const { showid } = query;
        const response = await axios.get(
            `http://api.tvmaze.com/shows/${showid}?embed=cast`
        );
        return {
            props: {
                show: response.data
            }
        }
    }catch(error){
        return {
            props: {
                statusCode: error.response ? error.response.status : 500
            }
        }
    }
    
}