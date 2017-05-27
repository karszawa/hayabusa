const RollingSpider = require("rolling-spider");

const rollingSpider = new RollingSpider({
		uuid: ''
});

rollingSpider.connect(() => {
		rollingSpider.setup(() => {
				rollingSpider.startPing();
		});
});
