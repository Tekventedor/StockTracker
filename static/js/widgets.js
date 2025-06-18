document.addEventListener('DOMContentLoaded', function() {
    // Initialize Market Overview widget
    const marketOverviewContainer = document.getElementById('market-overview');
    if (marketOverviewContainer && window.widgetConfigs) {
        new TradingView.widget({
            ...window.widgetConfigs.marketOverview,
            container_id: 'market-overview'
        });
    }

    // Initialize Market Quotes widget
    const marketQuotesContainer = document.getElementById('market-quotes');
    if (marketQuotesContainer && window.widgetConfigs) {
        new TradingView.widget({
            ...window.widgetConfigs.marketQuotes,
            container_id: 'market-quotes'
        });
    }

    // Initialize stock widgets
    document.querySelectorAll('.tradingview-widget-container').forEach(container => {
        if (container.dataset.widgetConfig) {
            const config = JSON.parse(container.dataset.widgetConfig);
            new TradingView.widget({
                ...config,
                container_id: container.id || `widget-${Math.random().toString(36).substr(2, 9)}`
            });
        }
    });
}); 