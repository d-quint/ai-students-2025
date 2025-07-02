// AI Tool Adoption Charts - Interactive Data Visualizations
// Chart.js implementation for modern, responsive data visualization

// Chart 1: AI Tool Adoption Rates (Horizontal Bar Chart)
const adoptionData = {
    labels: [
        'Voice Assistants',
        'Information Search',
        'ChatGPT',
        'Writing Assistance',
        'Grammar Checking',
        'Document Summarization'
    ],
    datasets: [{
        label: 'Adoption Rate (%)',
        data: [80, 69, 66, 54, 42, 33],
        backgroundColor: [
            '#6366F1', // Indigo
            '#8B5CF6', // Violet
            '#EC4899', // Pink
            '#F59E0B', // Amber
            '#10B981', // Emerald
            '#3B82F6'  // Blue
        ],
        borderColor: [
            '#4F46E5',
            '#7C3AED',
            '#DB2777',
            '#D97706',
            '#059669',
            '#2563EB'
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
    }]
};

const adoptionConfig = {
    type: 'bar',
    data: adoptionData,
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'AI Tool Adoption Rates Among U.S. College Students (2025)',
                font: {
                    family: "'Inter', sans-serif",
                    size: 18,
                    weight: '600'
                },
                color: '#1F2937',
                padding: 20
            },
            tooltip: {
                backgroundColor: 'rgba(17, 24, 39, 0.95)',
                titleColor: '#F9FAFB',
                bodyColor: '#F9FAFB',
                borderColor: '#6366F1',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: false,
                titleFont: {
                    family: "'Inter', sans-serif",
                    weight: '600'
                },
                bodyFont: {
                    family: "'Inter', sans-serif"
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: '#E5E7EB',
                    drawBorder: false
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    },
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12
                    },
                    color: '#6B7280'
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        family: "'Inter', sans-serif",
                        size: 13,
                        weight: '500'
                    },
                    color: '#374151'
                }
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeOutQuart'
        }
    }
};

// Chart 2: Gender Differences in AI Usage (Comparison Chart)
const genderData = {
    labels: ['ChatGPT Familiarity', 'Daily Usage', 'Risk Concerns', 'Policy Clarity Needs'],
    datasets: [{
        label: 'Male Students',
        data: [97.9, 28, 15, 22],
        backgroundColor: '#6366F1',
        borderColor: '#4F46E5',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
    }, {
        label: 'Female Students',
        data: [90.1, 20, 35, 42],
        backgroundColor: '#EC4899',
        borderColor: '#DB2777',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
    }]
};

const genderConfig = {
    type: 'bar',
    data: genderData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: "'Inter', sans-serif",
                        size: 13,
                        weight: '500'
                    },
                    color: '#374151',
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20
                }
            },
            title: {
                display: true,
                text: 'Gender Differences in AI Tool Usage Patterns',
                font: {
                    family: "'Inter', sans-serif",
                    size: 18,
                    weight: '600'
                },
                color: '#1F2937',
                padding: 20
            },
            tooltip: {
                backgroundColor: 'rgba(17, 24, 39, 0.95)',
                titleColor: '#F9FAFB',
                bodyColor: '#F9FAFB',
                borderColor: '#6366F1',
                borderWidth: 1,
                cornerRadius: 8,
                titleFont: {
                    family: "'Inter', sans-serif",
                    weight: '600'
                },
                bodyFont: {
                    family: "'Inter', sans-serif"
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#E5E7EB',
                    drawBorder: false
                },
                ticks: {
                    font: {
                        family: "'Inter', sans-serif",
                        size: 11
                    },
                    color: '#6B7280',
                    maxRotation: 45
                }
            },
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: '#E5E7EB',
                    drawBorder: false
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    },
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12
                    },
                    color: '#6B7280'
                }
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeOutQuart',
            delay: (context) => context.dataIndex * 200
        }
    }
};

// Chart 3: Market Growth Timeline (Line Chart)
const marketData = {
    labels: ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [{
        label: 'AI in Education Market (Billions USD)',
        data: [3.2, 4.8, 7.2, 12.1, 20.3, 34.2, 52.8, 75.1],
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#6366F1',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8
    }]
};

const marketConfig = {
    type: 'line',
    data: marketData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'AI in Education Market Growth Projection (2023-2030)',
                font: {
                    family: "'Inter', sans-serif",
                    size: 18,
                    weight: '600'
                },
                color: '#1F2937',
                padding: 20
            },
            tooltip: {
                backgroundColor: 'rgba(17, 24, 39, 0.95)',
                titleColor: '#F9FAFB',
                bodyColor: '#F9FAFB',
                borderColor: '#6366F1',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: false,
                titleFont: {
                    family: "'Inter', sans-serif",
                    weight: '600'
                },
                bodyFont: {
                    family: "'Inter', sans-serif"
                },
                callbacks: {
                    label: function(context) {
                        return '$' + context.parsed.y + 'B USD';
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#E5E7EB',
                    drawBorder: false
                },
                ticks: {
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12
                    },
                    color: '#6B7280'
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#E5E7EB',
                    drawBorder: false
                },
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'B';
                    },
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12
                    },
                    color: '#6B7280'
                }
            }
        },
        animation: {
            duration: 2500,
            easing: 'easeOutQuart'
        }
    }
};

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Chart 1: Adoption Rates
    const ctx1 = document.getElementById('adoptionChart');
    if (ctx1) {
        new Chart(ctx1, adoptionConfig);
    }
    
    // Chart 2: Gender Differences
    const ctx2 = document.getElementById('genderChart');
    if (ctx2) {
        new Chart(ctx2, genderConfig);
    }
    
    // Chart 3: Market Growth
    const ctx3 = document.getElementById('marketChart');
    if (ctx3) {
        new Chart(ctx3, marketConfig);
    }
});

// Interactive features
function toggleDataVisibility(chartId, datasetIndex) {
    const chart = Chart.getChart(chartId);
    if (chart) {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.hidden = !meta.hidden;
        chart.update();
    }
}

// Responsive chart resize handler
window.addEventListener('resize', function() {
    Chart.helpers.each(Chart.instances, function(instance) {
        instance.resize();
    });
});

// Export chart data functionality
function exportChartData(chartId, filename) {
    const chart = Chart.getChart(chartId);
    if (chart) {
        const csvContent = "data:text/csv;charset=utf-8," 
            + chart.data.labels.map((label, index) => {
                return label + "," + chart.data.datasets[0].data[index];
            }).join("\n");
        
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", filename + ".csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
