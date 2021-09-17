import React from 'react';
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    return (
            <Bar
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'Colors',
                        data: [12,34,112,33,45,23],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(25, 99, 132, 0.2)',
                            'rgba(255, 9, 32, 0.2)',
                            'rgba(55, 99, 132, 0.2)',
                            'rgba(255, 99, 12, 0.2)',
                            'rgba(2, 99, 13, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(25, 99, 132, 1',
                            'rgba(255, 9, 32, 1)',
                            'rgba(55, 99, 132, 1)',
                            'rgba(255, 99, 12, 1)',
                            'rgba(2, 99, 13, 1)',
                        ],
                        borderWidth: 3
                    },
                    {
                        label: 'Quantity',
                        data: [22,54,2,10,55,43],
                        backgroundColor: 'yellow',
                        borderColor: 'blue',
                        borderWidth: 3
                    }
                ]
                }}
                height={400}
                width={600} 
                options= {{
                    maintainAspectRatio: false,
                    scales: {
                        y: 
                            {
                                
                                beginAtZero: true, 
                                
                            }
                    }   
                }}
            />
    )
}

export default BarChart;
