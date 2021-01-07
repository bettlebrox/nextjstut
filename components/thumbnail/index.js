import Link from 'next/link';


const Thumbnail = ({ 
    imageUrl, 
    caption,
    href = '',
    as = '',
    small = false
    }) => {
    return (
        <div className="thumbnail">
            <Link href={href} as={as}>
                <a>
                    {imageUrl
                        ?<img src={imageUrl} className="thumbnail__image"/>
                        :null
                    }
                    <h4 className="thumbnail__caption">{caption}</h4>
                </a>
            </Link>
            <style jsx>{`
                .thumbnail__image {
                    width: ${small ? '100px' : '100%'};
                }
                .thumbnail__caption{
                    text-align: center;
                    padding: 10px;
                }
                `}
            </style>
        </div>
    )
}

export default Thumbnail;