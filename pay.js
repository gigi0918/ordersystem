var app = new Vue({
    el:'#app',
    data:{
        
        getinfo: function(){
            var url = location.search;  //接收購物清單字串
            // turn 購物清單字串
            turn = decodeURI(url)   //轉為UTF-8
    
            console.log(turn);
            var str1 = turn.split('=');
            console.log("str1= ", str1);
            console.log("str1[1]= ", str1[1]);

            return str1[1];
            }

    },
    methods:{
        
        
        
    

    },
    computed:{

       

        
    }
    
})