import placeholder from '../images/poster-placeholder.png';

export function getMovieImg(pathImg, width)
{
    return (pathImg ? `https://image.tmdb.org/t/p/w${width}${pathImg}` : placeholder);
}
