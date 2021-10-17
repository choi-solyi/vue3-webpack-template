const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

/// export -> module.exports
module.exports ={
    
    mode: 'development',
    
    resolve:{
        extensions: ['.js', '.vue'],
        
        //경로 별칭
        alias:{
            '~': path.resolve(__dirname, 'src'),
            'assets':path.resolve(__dirname, 'src/assets')
        }
    },

    entry: './src/main.js',   
    
    //결과물(번들)을 반환하는 설정
    output: {
        path: path.resolve(__dirname, 'dist'), //무조건 절대경로로 명시, __dirname은 현재 프로젝트를 말함
        filename:'main.js',
        clean: true  //변경전 기존 내용 삭제함
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s?css$/,     //.css로 끝나는걸 찾는 정규식 >> s?css s가 있을수도 없을수도 있음
                use: [      //main.scss 에 코딩을 하는데 sass->postcss로 공급업체 접두사 적용->css로더로 읽고->style로 style태그로 삽입해준다.
                    'vue-style-loader', //이게 마지막에 로드 되도록..
                    'style-loader', //스타일이 우선이어야함
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use:[
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'file-loader'                
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from: 'static'}
            ]
        }),
        new VueLoaderPlugin()
    ],
    devServer:{
        host: 'localhost'
    }
}