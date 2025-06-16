document.addEventListener('DOMContentLoaded', function() {
    // Initialize Market Overview widget
    const marketOverviewContainer = document.querySelector('.market-overview-widget');
    if (marketOverviewContainer && window.widgetConfigs) {
        new TradingView.widget({
            ...window.widgetConfigs.marketOverview,
            container_id: marketOverviewContainer.id
        });
    }

    // Initialize Market Quotes widget
    const marketQuotesContainer = document.querySelector('.market-quotes-widget');
    if (marketQuotesContainer && window.widgetConfigs) {
        new TradingView.widget({
            ...window.widgetConfigs.marketQuotes,
            container_id: marketQuotesContainer.id
        });
    }
}); 