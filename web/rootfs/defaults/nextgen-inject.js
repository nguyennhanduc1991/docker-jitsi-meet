// NextGen Meet CSS Injection Script
(function() {
    'use strict';
    
    // Function to load CSS
    function loadCSS(href) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = href;
        document.head.appendChild(link);
        console.log('NextGen Meet: Loaded CSS', href);
    }
    
    // Function to load JS
    function loadJS(src) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.async = true;
        document.head.appendChild(script);
        console.log('NextGen Meet: Loaded JS', src);
    }
    
    // Load NextGen Meet CSS files
    var cssFiles = [
        '/css/nextgen-variables.css',
        '/css/nextgen-mixins.css',
        '/css/nextgen-components.css',
        '/css/nextgen-toolbar.css',
        '/css/nextgen-video.css',
        '/css/nextgen-animations.css',
        '/css/custom.css'
    ];
    
    // Load NextGen Meet JS files
    var jsFiles = [
        '/js/nextgen-design-tokens.js'
    ];
    
    // Load CSS files
    cssFiles.forEach(function(href) {
        loadCSS(href);
    });
    
    // Load JS files
    jsFiles.forEach(function(src) {
        loadJS(src);
    });
    
    // Apply NextGen Meet theme
    document.addEventListener('DOMContentLoaded', function() {
        // Add NextGen Meet class to body
        document.body.classList.add('nextgen-meet');
        
        // Apply custom styling
        var style = document.createElement('style');
        style.textContent = `
            .nextgen-meet {
                --nextgen-primary: #1976d2;
                --nextgen-secondary: #ffffff;
                --nextgen-accent: #00bcd4;
                --nextgen-surface: #f5f5f5;
                --nextgen-background: #ffffff;
            }
        `;
        document.head.appendChild(style);
        
        console.log('NextGen Meet: Theme applied successfully!');
    });
    
})();
