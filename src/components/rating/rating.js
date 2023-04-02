import orange_star from '../../assets/logo/Star.svg';
import grey_star from '../../assets/logo/Star_Gray.svg';

export default function Rating(props){
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="rating-container">
            {stars.map(star =>
                props.rating >= star ? (
                    <img
                        key={star.toString()}
                        src={orange_star}
                        alt='orange_star'
                        className="star"
                    />
                ) : (
                    <img
                        key={star.toString()}
                        src={grey_star}
                        alt='grey_star'
                        className="star"
                    />
                ),
            )}
        </div>
    );
};