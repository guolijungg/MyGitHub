//计算器盒子容器
	var box = document.getElementById("box");
	//工具栏
	var close = document.getElementById("close");
	var resize = document.getElementById("resize");
	//结果面板
	var res = document.getElementById("res");
	var express = document.getElementById("express");
	//计算面板的按键
	var spans = document.querySelectorAll(".calcPanel span");
	//重置和退格
	var reset = document.getElementById("reset");
	var remove = document.getElementById("remove");


	//为每一个按键绑定点击事件，循环spans集合
	for(var i in spans){
		if(spans[i].dataset){
			// console.log(spans[i]);
			spans[i].addEventListener('click',function(){
				//this指向当前事件的调用者
				var number = this.dataset.number; 
				//对用户输入做处理
				getInput(number);
			});
		}	
	}
	//定义全局变量
	var calcComplete;
	//将所有符号放到对象里
	var symbol = {
		"+":"+",
		"-":"-",
		"×":"×",
		"÷":"÷",
		"%":"%",
		"sin":"sin",
		"cos":"cos",
		"tan":"tan",
		"pow":"pow"
	} 
	//定义全局变量，记录用户输入的值，给计算函数做计算
	var lVal,exp,rVal;
	//定义变量，记录用户上次输入的值
	var preKey ="";
	//处理用户输入的函数
	function getInput(number){
		if(calcComplete){  //连续计算
			//计算完成后的结果
			var resAfterCalc = res.innerHTML;  
			if(calcComplete  && symbol[number]){  //如果计算完成
				express.innerHTML = "";
				express.innerHTML = resAfterCalc+symbol[number];
			}else{
				console.log("计算完成后的res:",resAfterCalc);
				//每次计算完成之后先清空结果面板
				res.innerHTML = "";  
				//清空计算完成标识位
				calcComplete = false;  
			}
		}
		if(number == "="){
			return;
		}
		if(number !== "CE" && number!=="←"){
			//如果显示为0，先置空
			if(res.innerHTML == "0" && number!="."){
				res.innerHTML = "";
			}
			//判断是否存在. 如果存在，不能输入更多
			var hasPoint = res.innerHTML.indexOf(".")!=-1?1:0;
			if(hasPoint && number === "."){
				number = "";
			}
			res.innerHTML += number;  // 9  6
		}
		//如果点击的是运算符 判断
		if(symbol[number]){ 
			//将输入的运算符记录到preKey
			preKey = number;
			express.innerHTML = res.innerHTML;
			if(number == "sin" || number=="cos" || number == "tan" || number =="pow"){
				res.innerHTML = express.innerHTML.slice(0,-3);
				exp = express.innerHTML.slice(-3);
			}else{
				res.innerHTML = express.innerHTML.slice(0,-1);
				//记录运算符
				exp = express.innerHTML.slice(-1);
			}
			//记录第一操作数
			lVal = res.innerHTML;
		}
		console.log("上次输入的符号:",preKey);
		//判断上次输入的是否为符号
		if(symbol[preKey]){
			res.innerHTML = "";
			//清空上次记录的符号
			preKey = "";
			//如果输入的不是符号
			if(!symbol[number]){ 
				res.innerHTML += number;
				
			}
		}
		rVal = res.innerHTML;
	}

	//点击=计算结果
	equal.addEventListener('click',function(){
		console.log(lVal,exp,rVal);
		calc(lVal,exp,rVal);
		calcComplete = true;  //表示计算完成
	});
	//做核心计算的函数
	function calc(lVal,exp,rVal){
		//先清空表达式
		express.innerHTML = "";
		switch(exp){
			case "+":
				res.innerHTML = Number(lVal) +Number(rVal);
				break;
			case "-":
				res.innerHTML = Number(lVal) -Number(rVal);
				break;
			case "×":
				res.innerHTML = (Number(lVal) *Number(rVal)).toFixed(4);
				break;
			case "÷":
				if(rVal=="0"){
					res.innerHTML = "除数不能为零";
					express.innerHTML = "";
					return;
				}
				res.innerHTML = Number(lVal) /Number(rVal);
				break;
			case "%":
				res.innerHTML = Number(lVal) % Number(rVal);
				break;
			case "sin":
				res.innerHTML = Math.sin(Number(lVal)*Math.PI/180).toFixed(5);
				break;
			case "cos":
				res.innerHTML = Math.cos(Number(lVal)*Math.PI/180).toFixed(5);
				break;
			case "tan":
				res.innerHTML = Math.tan(Number(lVal)*Math.PI/180).toFixed(5);
				break;
			case "pow":
				res.innerHTML = Math.pow(Number(lVal),Number(rVal));
				break;
			default:
				console.log("没有执行计算");
				break;
		}

	}

	
	//点击×关闭窗口 添加点击事件
	close.addEventListener('click',function(){
		box.style.display = "none";
	});

	//点击方框最大化
	resize.addEventListener('click',function(){
		var title = resize.getAttribute("title"); //获得title属性的值
		if(title == "最大化"){  //说明现在是正常窗口
			//全屏 
			box.className = "box boxLarge";
			resize.setAttribute("title","正常窗口");
			resize.innerHTML = "—";
		}else{  //说明现在是全屏，再次点击将回到正常窗口
			box.className = "box boxNormal";
			resize.setAttribute("title","最大化");
			resize.innerHTML = "口";
		}
	});

	//点击CE，复位0
	reset.addEventListener('click',function(){
		res.innerHTML = "0";
		express.innerHTML = "";
	});

	// 点击退格
	remove.addEventListener('click',function(){
		if(res.innerHTML != ""){
			if(res.innerHTML.length == 1){
				res.innerHTML = "0";
			}else{
				res.innerHTML = res.innerHTML.slice(0,-1);
			}
		}
	});
