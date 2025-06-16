// Widget configurations
const widgetConfigs = {
    marketOverview: {
        tabs: [
            {
                title: "Indices",
                symbols: [
                    {s: "FOREXCOM:SPXUSD", d: "S&P 500"},
                    {s: "FOREXCOM:NSXUSD", d: "Nasdaq 100"},
                    {s: "FOREXCOM:DJI", d: "Dow 30"}
                ]
            }
        ],
        colorTheme: "light",
        dateRange: "12M",
        showChart: true,
        largeChartUrl: "",
        isTransparent: false,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        width: "100%",
        height: "100%",
        plotLineColorFilling: "rgba(41, 98, 255, 0.1)",
        plotLineColor: "rgba(41, 98, 255, 1)",
        locale: "en"
    },
    marketQuotes: {
        width: "100%",
        height: "100%",
        symbolsGroups: [
            {
                name: "Indices",
                originalName: "Indices",
                symbols: [
                    {name: "FOREXCOM:SPXUSD", displayName: "S&P 500"},
                    {name: "FOREXCOM:NSXUSD", displayName: "Nasdaq 100"},
                    {name: "FOREXCOM:DJI", displayName: "Dow 30"}
                ]
            }
        ],
        showSymbolLogo: true,
        colorTheme: "light",
        isTransparent: false,
        locale: "en"
    }
};

// Initialize widgets when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Market Overview widget
    const marketOverviewContainer = document.querySelector('.market-overview-widget');
    if (marketOverviewContainer) {
        new TradingView.widget({
            ...widgetConfigs.marketOverview,
            container_id: marketOverviewContainer.id
        });
    }

    // Initialize Market Quotes widget
    const marketQuotesContainer = document.querySelector('.market-quotes-widget');
    if (marketQuotesContainer) {
        new TradingView.widget({
            ...widgetConfigs.marketQuotes,
            container_id: marketQuotesContainer.id
        });
    }
}); 