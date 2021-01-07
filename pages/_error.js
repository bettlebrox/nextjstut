const CustomerError = ({ statusCode }) => {
    console.log('error code', statusCode);
    return <div>This is an error</div>
};

const getServerSideProps = ({ err, res}) => {
    return {
        props:{
            statusCode: res? res.statusCode: err ? err.statusCode : 404 
        }
    }
}

export default CustomerError;