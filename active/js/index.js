/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by babay on 2017/3/17.
	 */
	var page1 = __webpack_require__(2);
	var page2 = __webpack_require__(4);
	var tips,btn;
	var current;
	var app  = new Vue({

	    el:'#app',

	    data:function () {
	        return{
	            currentView:'page1',
	            name:''
	        }
	    },

	    mounted:function(){
	        //tips = document.getElementById('tips');
	        btn = document.getElementById('btn');
	       // tips.style.display = 'none';
	        btn.style.display = 'none'
	    },

	    components:{
	        'page1':page1,
	        'page2':page2

	    },

	    methods:{
	        again:function(){
	            this.currentView = 'page1'
	        },
	        generate:function(name){
	            console.log('generate',name);
	            this.name = name;
	            this.currentView = 'page2'

	        }
	    },

	    watch:{
	        currentView:function(){
	            if(this.currentView == 'page1'){
	               // tips.style.display = 'none';
	                btn.style.display = 'none'
	            } else {
	                //tips.style.display = 'block';
	                btn.style.display = 'block'
	            }
	        }
	    },

	    computed:{
	        btmText:function(){
	            if(this.currentView == 'page1') {
	                return ''
	            }else {
	                return ''
	            }
	        }
	    }

	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by jie on 2017/1/22.
	 */
	var tpl = __webpack_require__(3);
	module.exports = {
	    template:tpl,

	    data:function(){
	        return{
	            inputName:''
	        }
	    },

	    methods:{
	        generate:function(e){
	        	console.log(e);
	        	current=e
	            if(this.inputName) {
	                this.$emit('generate',this.inputName)
	            }else{
	            	alert('请输入您的名字');
	            }
	        }
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"content page1\">\r\n    <div class=\"content_top\"></div>\r\n\r\n    <i class=\"logo\"></i>\r\n  <div class=\"input\">\r\n        <input type=\"text\" placeholder=\"输 入 你 的 名 字\" v-model=\"inputName\" maxlength=\"6\">\r\n    </div>\r\n<p class=\"font-p\">选择我要生成的电竞/直播故事</p>   \r\n  <div class=\"butt3 clear\"> \r\n  <div class=\"btn1 inside_btn\" v-on:click=\"generate(1)\">\r\n        \r\n    </div>\r\n <div class=\"btn2 inside_btn\" v-on:click=\"generate(2)\">\r\n        \r\n    </div>\r\n <div class=\"btn3 inside_btn\" v-on:click=\"generate(3)\">\r\n        \r\n    </div>\r\n<div> \r\n </div>\r\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by babay on 2017/3/17.
	 */
	/**
	 * Created by babay on 2017/3/22.
	 */
	var tpl = __webpack_require__(5);
	var data = __webpack_require__(6);
	var result = document.getElementById('result');
	function getLength(str){
	    if(/[a-z]/i.test(str)){
	        return str.match(/[a-z]/ig).length;
	    }
	    return 0;
	}
	function setNames(name, num, canvas, img, QR) {
	    var numOfEn = getLength(name);
	    var numOfCn = name.length - numOfEn;
	    var length = 0.5*numOfEn + numOfCn;
	    var ctx = canvas.getContext("2d");
	    ctx.drawImage(img, 0, 0,653,809);
	    var dataArray = data[num];
	    var size, width, height;
	    ctx.fillStyle = "#0f0f11";
	    for (var i = 0; i < dataArray.length; i++) {
	        size = dataArray[i].size;
	        height = dataArray[i].height;
	        width = dataArray[i].width;
	        ctx.font = (length>4?size-15:size) + "px Microsoft YaHei";
	        if(dataArray[i].flag){
	            ctx.fillText(name, width - size  , height);
	        } else {
	            if(length>4) {
	                ctx.fillText(name, width - length*size + 5*size  , height);
	            }else if(numOfEn == 6){
	                ctx.fillText(name, width - length*size + 2*size , height);
	            }
	            else {
	                ctx.fillText(name, width - length*size + 3*size , height);
	            }
	        }
	    }
	    /*ctx.fillStyle = '#5B5652'
	    ctx.fillRect(0, 2, 260, 75)
	    ctx.fillStyle = "white";
	    ctx.font = "30px Microsoft YaHei";
	    ctx.fillText('分享，'+name+'的爱情故事', 20, 53);*/
	    var image = document.getElementById('showImg')
	    image.src = canvas.toDataURL("image/png");

	}
	function getRandom(range) {
	    return Math.floor(Math.random()*range) % range
	};
	module.exports = {
	    props: ['name'],
	    template: tpl,
	    data: function () {
	        return {
	            names: '微笑面对',
	            imgSrc: '',
	            QRSrc:'./img/QR.jpg'
	        }
	    },
	    mounted: function () {
	    	if(current==1){
	    		var num = getRandom(9) + 1;
		        //var num = 8;
		        var that = this;
		        var canvas = document.getElementById('canvas');
		        var img = document.getElementById("contentImg");
		        var QR = document.getElementById("QRSrc");
		        this.imgSrc = './img/' + num + '.png';
		        img.onload = function(){
		            setNames(that.name, '1'+num, canvas, img, QR);
		        };
	    	}else if(current==2){
	    		var num = getRandom(12) + 1;
		        //var num = 10;
		        var that = this;
		        var canvas = document.getElementById('canvas');
		        var img = document.getElementById("contentImg");
		        var QR = document.getElementById("QRSrc");
		        this.imgSrc = './img2/' + num + '.png';
		        img.onload = function(){
		            setNames(that.name, '2'+num, canvas, img, QR);
		        };
	    	}else{
	    		var num = getRandom(9) + 1;
		        //var num = 9;
		        var that = this;
		        var canvas = document.getElementById('canvas');
		        var img = document.getElementById("contentImg");
		        var QR = document.getElementById("QRSrc");
		        this.imgSrc = './img3/' + num + '.png';
		        img.onload = function(){
		            setNames(that.name, '3'+num, canvas, img, QR);
		        };
	    	}
	        
	    }

	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div class=\"content page2\" id=\"result\">\r\n <div class=\"img-warn\" >\r\n </div> \r\n<div class=\"img-bg\"> \r\n<img  alt=\"\" id=\"showImg\">\r\n </div> \r\n   <canvas id=\"canvas\" height=\"809\" width=\"653\"></canvas>\r\n    <img :src=\"imgSrc\" alt=\"\" id=\"contentImg\">\r\n    <img :src=\"QRSrc\" alt=\"\" id=\"QRSrc\">\r\n</div>\r\n\r\n\r\n";

/***/ },
/* 6 */
/***/ function(module, exports) {

		module.exports = {
		    11: [
		        {
		            size: 40,
		            width: 210,
		            height: 218
		        }
		    ],
		    12: [
		        {
		           size: 40,
		            width: 230,
		            height: 225,
		            flag: true
		        }
		    ],
		    13: [
		        {
		           size: 40,
		            width: 140,
		            height: 440,
		            flag: true
		        }
		    ],
		    14: [
		        {
		            size: 40,
		            width: 223,
		            height: 220
		        }
		    ],
		    15: [
		    ],
		    16: [
		        {
		            size: 40,
		            width: 230,
		            height: 220
		        }
		    ],
		    17: [
		        {
		            flag: true,
		            size: 40,
		            width: 220,
		            height: 410
		        }
		    ],
		    18: [
		        {
		            flag: true,
	
		            size: 40,
		            width: 150,
		            height: 430
		        }
		    ],
		    19: [
		    ],
		    110: [
		        {
		            flag: true,
	
		            size: 60,
		            width: 400,
		            height: 425
		        }
		    ],
		    21: [
		        {
		            size: 40,
		            width: 120,
		            height: 220
		        },
		        {
		            size: 40,
		            width: 70,
		            height: 425
		        }
		    ],
		    22: [
		        {
		           size: 40,
		            width: 220,
		            height: 210,
		            flag: true
		        },
		        {
		            size: 40,
		            width: 120,
		            height: 385
		        }
		    ],
		    23: [
		        {
		            size: 40,
		            width: 100,
		            height: 218
		        }
		    ],
		    24: [
		        {
		            size: 40,
		            width: 320,
		            height: 335
		        },
		        {
		            size: 40,
		            width: 180,
		            height: 380
		        }
		    ],
		    25: [
		        {
		            size: 40,
		            width: 250,
		            height: 320
		        }
		        
		    ],
		    26: [
		        {
		           size: 40,
		            width: 130,
		            height: 220,
		            flag: true
		        },
		        {
		            size: 40,
		            width: 100,
		            height: 420
		        }
		    ],
		    27: [
		    ],
		    28: [
		        {
		            size: 40,
		            width: 200,
		            height: 218,
		            flag: true
		        }
		    ],
		    29: [
		    ],
		    210: [
		        {
		           size: 40,
		            width: 130,
		            height: 230,
		            flag: true
		        },
		        {
		            size: 40,
		            width: 120,
		            height: 430
		        }
		    ],
		    211: [
		        {
		            size: 40,
		            width: 280,
		            height: 250
		        }
		    ],
		    212: [
		    ],
		    31: [
		        {
		            size: 40,
		            width: 120,
		            height: 230
		        }
		    ],
		    32: [
		        {
		           size: 40,
		            width: 180,
		            height: 220,
		            flag: true
		        },
		        {
		            size: 40,
		            width: 180,
		            height: 470
		        }
		    ],
		    33: [
		        {
		            size: 40,
		            width: 120,
		            height: 215
		        }
		    ],
		    34: [
		        {
		           size: 40,
		            width: 140,
		            height: 220,
		            flag: true
		        }
		    ],
		    35: [
		        {
		            size: 40,
		            width: 120,
		            height: 220
		        }
		    ],
		    36: [
		        {
		           size: 40,
		            width: 130,
		            height: 215,
		            flag: true
		        } 
		    ],
		    37: [
		        {
		            size: 40,
		            width: 120,
		            height: 230
		        }
		    ],
		    38: [
		        {
		           size: 40,
		            width: 120,
		            height: 230,
		            flag: true
		        }
		    ],
		    39: [
		        {
		            size: 40,
		            width: 120,
		            height: 240
		        }
		    ],
		    310: [
		        {
		           size: 50,
		            width: 120,
		            height: 220,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    311: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    312: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    313: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    314: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    315: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    316: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    317: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    318: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    319: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    320: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    321: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    322: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    323: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    324: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    325: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    326: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    327: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    328: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    329: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    330: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    331: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    332: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    333: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    334: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    335: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    336: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    337: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    338: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ],
		    339: [
		        {
		            size: 50,
		            width: 370,
		            height: 218
		        },
		        {
		            size: 40,
		            width: 50,
		            height: 400
		        },
		        {
		            size: 40,
		            width: 80,
		            height: 510
		        },
		    ],
		    340: [
		        {
		           size: 50,
		            width: 370,
		            height: 218,
		            flag: true
		        },
		        {
		            size: 50,
		            width: 80,
		            height: 440
		        }
		    ]
	
		};

/***/ }
/******/ ]);