module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'http://169.254.176.37:7001',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}