import axios from 'axios';
import Thumbnail from '../../components/thumbnail'
import Error from 'next/error';

const Home = ({shows, country, statusCode}) => {
    if(statusCode){
        return <Error statusCode={statusCode} />;
    }
    const renderShows = () => {
        return shows.map((show, index) => {
            return (
                <li key={index}>
                    <Thumbnail
                        href="/[country]/[showid]"
                        as={`/${country}/${show.show.id}`}
                        imageUrl={(show.show.image && show.show.image.medium) || undefined} 
                        caption={show.show.name} />
                </li>
            )
        })
    }
    return (
        <div className="home">
            <ul className="tvshows-grid">
                { renderShows()}
            <style jsx>{`
                .tvshows-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }
            `}</style> 
            </ul>
        </div>
    )
}

export default Home;

export const getServerSideProps = async context => {
    try{
        const country = context.query.country || 'us';
        const response = await axios.get(
            `http://api.tvmaze.com/schedule?country=${country}&date=2020-01-06`
        );
        return {
            props: { 
                shows: response.data ,
                country: country}
        }
    }catch(error){
        return {
            props:{
                statusCode: error.response ? error.response.status : 500
            }
        }
    }
    
}