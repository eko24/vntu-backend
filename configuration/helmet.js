module.exports = function helmetConfig(helmet, app) {
    app.use(helmet.frameguard('deny'));
    app.use(helmet.xssFilter());
    app.use(helmet.crossdomain());
    app.use(helmet.noSniff());
    app.use(helmet.hidePoweredBy({
        setTo: 'LOVE'
    }));

    /*app.use(helmet.csp({
		defaultSrc: ["'self'"],
		scriptSrc: ["'self'","'unsafe-eval'","http://localhost:35729"],
		styleSrc: ["'self'","'unsafe-inline'",'http://fonts.googleapis.com/','http://fonts.gstatic.com/'],
		imgSrc: ["'self'"],
		connectSrc: ["'self'","ws://localhost:35729/"],
		fontSrc: ["*"],
		objectSrc: [],
		mediaSrc: [],
		frameSrc: []
	}));*/
};