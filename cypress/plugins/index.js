module.exports = (on, config) => {
    on('before:browser:launch', (browser, launchOpt) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
            launchOpt.args.push('');
            return launchOpt;
        }
    })
}
