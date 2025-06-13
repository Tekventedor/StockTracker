// Function to create a TradingView widget
function createTradingViewWidget(container, widgetType, options = {}) {
    const containerId = container.id || `tradingview_${Math.random().toString(36).substr(2, 9)}`;
    container.id = containerId;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
        if (typeof TradingView !== 'undefined') {
            new TradingView.widget({
                container_id: containerId,
                ...options
            });
        }
    };
    document.head.appendChild(script);
}

// Initialize widgets when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize market overview widgets
    document.querySelectorAll('.tradingview-market-overview').forEach(container => {
        createTradingViewWidget(container, 'market_overview', {
            width: '100%',
            height: '100%',
            symbolsGroups: [
                {
                    name: "Indices",
                    symbols: [
                        { name: "FOREXCOM:SPXUSD" },
                        { name: "FOREXCOM:NSXUSD" },
                        { name: "FOREXCOM:DJI" }
                    ]
                },
                {
                    name: "Commodities",
                    symbols: [
                        { name: "CME_MINI:ES1!" },
                        { name: "CME:6E1!" },
                        { name: "COMEX:GC1!" }
                    ]
                },
                {
                    name: "Bonds",
                    symbols: [
                        { name: "CME:GE1!" },
                        { name: "CBOT:ZB1!" },
                        { name: "CBOT:UB1!" }
                    ]
                }
            ],
            showSymbolLogo: true,
            colorTheme: "light",
            isTransparent: false,
            locale: "en"
        });
    });

    // Initialize symbol overview widgets
    document.querySelectorAll('.tradingview-symbol-overview').forEach(container => {
        const symbol = container.dataset.symbol;
        if (symbol) {
            createTradingViewWidget(container, 'symbol_overview', {
                width: '100%',
                height: '100%',
                symbol: symbol,
                interval: 'D',
                timezone: 'Etc/UTC',
                theme: 'light',
                style: '1',
                locale: 'en',
                toolbar_bg: '#f1f3f6',
                enable_publishing: false,
                allow_symbol_change: true,
                container_id: container.id,
                studies: [
                    "RSI@tv-basicstudies",
                    "MASimple@tv-basicstudies"
                ],
                show_popup_button: true,
                popup_width: "1000",
                popup_height: "650"
            });
        }
    });

    // Initialize market quotes widgets
    document.querySelectorAll('.tradingview-market-quotes').forEach(container => {
        createTradingViewWidget(container, 'market_quotes', {
            width: '100%',
            height: '100%',
            symbolsGroups: [
                {
                    name: "Indices",
                    symbols: [
                        { name: "FOREXCOM:SPXUSD" },
                        { name: "FOREXCOM:NSXUSD" },
                        { name: "FOREXCOM:DJI" }
                    ]
                },
                {
                    name: "Commodities",
                    symbols: [
                        { name: "CME_MINI:ES1!" },
                        { name: "CME:6E1!" },
                        { name: "COMEX:GC1!" }
                    ]
                },
                {
                    name: "Bonds",
                    symbols: [
                        { name: "CME:GE1!" },
                        { name: "CBOT:ZB1!" },
                        { name: "CBOT:UB1!" }
                    ]
                }
            ],
            showSymbolLogo: true,
            colorTheme: "light",
            isTransparent: false,
            locale: "en"
        });
    });

    // Initialize screener widgets
    document.querySelectorAll('.tradingview-screener').forEach(container => {
        createTradingViewWidget(container, 'screener', {
            width: '100%',
            height: '100%',
            defaultColumn: "overview",
            defaultScreen: "general",
            market: "stock",
            showToolbar: true,
            colorTheme: "light",
            locale: "en",
            isTransparent: false
        });
    });

    // Initialize events widgets
    document.querySelectorAll('.tradingview-events').forEach(container => {
        createTradingViewWidget(container, 'events', {
            width: '100%',
            height: '100%',
            colorTheme: "light",
            isTransparent: false,
            locale: "en",
            importanceFilter: "-1,0,1"
        });
    });
}); 