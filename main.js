var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'雞排',
            imgUrl:'images/1.jpg',
            price:'70',
            count:'0',
            amount:'0'
          },
          {
            id:'2',
            itemName:'小肉豆',
            imgUrl:'images/2.jpg',
            price:'15',
            count:'0',
            amount:'0'
          },
          {
            id:'3',
            itemName:'雞皮',
            imgUrl:'images/3.jpg',
            price:'15',
            count:'0',
            amount:'0'
          },
          {
            id:'4',
            itemName:'米腸',
            imgUrl:'images/4.jpg',
            price:'20',
            count:'0',
            amount:'0'
          }
    ]
    },
    methods:{
        
        handlePlus: function(item){
            
            item.count++; 
            //addnewlist();
                    
        },
        handleSub: function(item){
            if(item.count>0){
            item.count--;
               
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }, 
        countTotal:function(){
            var countTotal=0;
            
           
            for (var i in this.itemList) {

                countTotal += parseInt(this.itemList[i].count*this.itemList[i].price);
            }
           console.log('itemList=',this.itemList);
            return countTotal;
        },
        
        handlepay: function(){

            

            if(this.countTotal()>0){

                console.log('cart=',this.itemList);


                var cart = JSON.stringify(this.itemList);
                var total =JSON.stringify(this.countTotal());

               // window.open(`pay.html?sendcart=${cart}&sendInfoNum=${info_num}&sendInfoMoney=${info_money}`, "_blank");
                window.open(`pay.html?sendcart=${cart}&snedtotal=${total}`);
                

            }else{
                alert("您未選購任何餐點");
            }
            
            //    alert("您未選購任何餐點");
            
        },
        
    

    },
    computed:{

        
    }
    
})