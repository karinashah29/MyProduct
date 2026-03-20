// PIE CHART - TOP CATEGORIES

const categoryCtx = document.getElementById('categoriesChart');

new Chart(categoryCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'Phones',
            'Laptops',
            'Gaming',
            'Accessories',
            'Drinkware'
        ],
        datasets: [{
            data: [650, 750, 250, 200, 1500],
            backgroundColor: [
                '#6366F1',
                '#22C55E',
                '#F59E0B',
                '#EC4899',
                '#3B82F6'
            ],
            borderWidth: 0
        }]
    },
    options:{
responsive:true,
maintainAspectRatio:false,
plugins:{
legend:{
position:'bottom'
}
},
cutout:'65%'
}
});



// BAR CHART - PRODUCT ENGAGEMENT

document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById("engagementChart").getContext("2d");

    // 🔥 Gradients
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 300);
    gradient1.addColorStop(0, "#14b8a6");
    gradient1.addColorStop(1, "#0f766e");

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
    gradient2.addColorStop(0, "#8b5cf6");
    gradient2.addColorStop(1, "#6d28d9");

    const data = {
        labels: [
            ["iPhone 16", "Pro Max"],
            ["Macbook", "Pro"],
            ["Minecraft", "Dirt Block"],
            ["Samsung", "Notebook"],
            ["Stanley"]
        ],
        datasets: [
            {
                label: "Engagement %",
                data: [90, 80, 75, 60, 50],

                backgroundColor: [
                    gradient1,
                    gradient2,
                    gradient1,
                    gradient2,
                    gradient1
                ],

                borderRadius: 12,
                borderSkipped: false,

                categoryPercentage: 0.55,
                barPercentage: 0.5,

                hoverBackgroundColor: [
                    "#0d9488",
                    "#7c3aed",
                    "#0d9488",
                    "#7c3aed",
                    "#0d9488"
                ]
            }
        ]
    };

    const config = {
        type: "bar",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            animation: {
                duration: 800,
                easing: "easeOutQuart"
            },

            layout: {
                padding: {
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10
                }
            },

            plugins: {
                legend: {
                    display: false
                },

                tooltip: {
                    backgroundColor: "#111827",
                    titleColor: "#fff",
                    bodyColor: "#d1d5db",
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return context.raw + "% engagement";
                        }
                    }
                }
            },

            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 0,
                        minRotation: 0,
                        color: "#6b7280",
                        autoSkip: false,
                        font: {
                            size: 11,
                            weight: "500"
                        },
                        padding: 8
                    }
                },

                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        color: "#9ca3af",
                        font: {
                            size: 11
                        },
                        callback: function(value) {
                            return value + "%";
                        }
                    },
                    grid: {
                        color: "rgba(0,0,0,0.05)",
                        drawBorder: false
                    }
                }
            },

            hover: {
                mode: "nearest",
                intersect: true
            }
        }
    };

    new Chart(ctx, config);
});