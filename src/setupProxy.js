const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware({
            target: 'https://i.maoyan.com/ajax',
            changeOrigin: true,
        })
    )
}

//请求这个ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=85A150803B1F11EDBEB24DECBA56A13604367D90CAC54926B99A91361EA238E4&optimus_risk_level=71&optimus_code=10
//转发为https://i.maoyan.com/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=85A150803B1F11EDBEB24DECBA56A13604367D90CAC54926B99A91361EA238E4&optimus_risk_level=71&optimus_code=10
//     |----target--------||/ajax|--request url