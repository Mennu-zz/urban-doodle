import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';

function computeReviews(reviews) {
    let dataSet = {};
    reviews.forEach(review => {
        dataSet[review.rating] = dataSet[review.rating] ? dataSet[review.rating] + 1 : 1;
    });
    return {
        labels: Object.keys(dataSet),
        data: Object.values(dataSet),
    }
}

function Reviews({ reviews }) {
    const topReviews = reviews.slice(-5).reverse();

    const graphData = useMemo(() => {
        const { labels, data } = computeReviews(reviews);
        return {
            labels,
            datasets: [{
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            }]
        };

    }, [reviews])


    return (
        <div class="row">
            <div class="col">
                <b>Recent Comments</b>
                {topReviews.map(review => {
                    return (<p> {review.comment} </p>)
                })}
            </div>
            <div class="col">
                <b>Graph</b>
                <Doughnut data={graphData} />
            </div>
        </div>
    )
}

export default Reviews;