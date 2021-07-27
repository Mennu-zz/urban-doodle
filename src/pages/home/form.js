import React, { useRef } from 'react';

function ReviewForm({ onSubmit }) {
    const ratingRef = useRef(null);
    const commentRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const rating = ratingRef.current.value;
        const comment = commentRef.current.value;

        if (rating && comment) {
            onSubmit({ rating, comment });
            e.target.reset();
        } else {
            alert('Login Failed');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="review">
                <input name="rating" ref={ratingRef} type="number" min="1" max="5" placeholder="Rating" />
                <input name="comment" ref={commentRef} type="text" placeholder="Comment" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ReviewForm;