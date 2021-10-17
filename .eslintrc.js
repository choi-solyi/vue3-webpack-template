module.exports ={
    env:{   //전 브라우저와 전 노트 환경에서 사용하는 전역 개념들을 코드 검사를 할것인지
        browser: true,
        node: true
    },
    extends:[
        // vue 에 대한 코드 규칙        
        // https://eslint.vuejs.org/rules/
        // https://eslint.org/docs/rules/
    //  'plugin:vue/vue3-essential',        //Lv1
        'plugin:vue/vue3-strongly-recommended', //Lv2
    //  'plugin:vue/vue3-recommended',      //Lv3 가장 엄격

        // js 에 대한 코드 규칙
        'eslint : recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'  //구버전에 호환되도록 도와주는 기능
    },
    rules :{
        // extends 부분에 정의를 했다면 별도 기입 안해도 상관없으나
        // 내 입맛에 맞게 혹은 회사 규칙에 맞게 변경
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "always"
        }],
        "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
        }]
    }
}