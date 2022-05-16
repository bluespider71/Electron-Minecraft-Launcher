const configure = (win) => {
    win.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
        callback({ requestHeaders: { Origin: "*", ...details.requestHeaders } });
    });

    win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                "Access-Control-Allow-Origin": ["*"],
                ...details.responseHeaders,
            },
        });
    });
};

export default configure
