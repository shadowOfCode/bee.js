# 欢迎使用 bee.js
---
##该javaScript库主要包括了如下模块：
### 1、手机号码校验； 

- [x] //电话号码
	 >isPhoneCallNum: function(input)

- [x] //电信手机号码
   >  isChinaTelecomPhoneNum: function(input)

- [x]	//中国联通
	>	isChinaUnicomPhoneNum: function(input) 

- [x]	//中国移动
	>	isChinaMobilePhoneNum: function(input) 

- [x]	//手机号码
    > isPhoneNum: function(input)
- [x]	//手机号码简单校验，只校验长度
	>	isPhoneNumBySize: function(input) 
### 2、身份证校验； 
- [x]	//18位身份证简单校验
	>	isSimpleIdCard18: function(idCard) 

- [x]	//15位身份证简单校验
	>	isSimpleIdCard15: function(idCard) 
- [x]	//18位身份证校验码校验
	>	checkCode: function(idCard) 

- [x]	//18位身份证严格校验
	>	isIdCard18: function(idCard) 
- [x]	//根据18身份证号码获取人员信息
	>	getPersonInfo18:function(idCard)
### 3、邮箱校验； 
- [x] 邮箱校验
 >isEmail: function(input)
### 4、字符串常用类； 

- [x]	空字符串
>isEmpty: function(input) 

- [x] 不是空字符串
> isNotEmpty: function(input) 
- [x] 空字符串，可为空格
>isBlank: function(input) 

- [x] 不是空字符串,空格也算空字符串
> isNotBlank: function(input) 
- [x] 去掉字符串两边的空格
>trim: function(input) 

- [x] 若为null则转为''	
> trimToEmpty: function(input) 
- [x] 以某个字符串开头		
>startsWith: function(input, prefix) 

- [x] 以某个字符串结尾
> endsWith: function(input, suffix) 

- [x] 包含某个子串
>contains: function(input, searchSeq) 
- [x] 判断字符串是否相等
>equals: function(input1, input2) 

- [x]	判断字符串是否相等，不区分大小写
>equalsIgnoreCase: function(input1, input2) 
- [x] 是否包含空白字符
>containsWhitespace: function(input) 

- [x]	//生成指定个数的字符
>	repeat: function(ch, repeatTimes) 
- [x]	删除空白字符
>deleteWhitespace: function(input) 

- [x] 右侧补全
>ightPad: function(input, size, padStr) 
- [x] 左侧补全
>leftPad: function(input, size, padStr) 

- [x]		//首小写字母转大写
	>	capitalize: function(input) 
- [x]		//首大写字母转小写
	>	uncapitalize: function(input) 

- [x]		//大写转小写，小写转大写
	>	swapCase: function(input) 

- [x]		//统计含有的子字符串的个数
	>	countMatches: function(input, sub) 

- [x]		//只包含字母
	>	isAlpha: function(input) 

- [x]		//只包含字母、空格
	>	isAlphaSpace: function(input) 

- [x]		//只包含字母、数字
	>	isAlphanumeric: function(input) 
- [x]		//只包含字母、数字和空格
	>	isAlphanumericSpace: function(input) 
- [x]		//数字
	>	isNumeric: function(input) 

- [x]		//小数
	>	isDecimal: function(input) 

- [x]		//负小数
	>	isNegativeDecimal: function(input) 

- [x]		//正小数
	>	isPositiveDecimal: function(input) 

- [x]		//整数
	>	isInteger: function(input) 

- [x]	//正整数
    >	isPositiveInteger: function(input) 
- [x]	//负整数
   >	isNegativeInteger: function(input) 
- [x]	//只包含数字和空格
    > isNumericSpace: function(input) 

- [x] 是否为空白字符
>   sWhitespace: function(input) 
- [x] 是否全为小写字母
>  isAllLowerCase: function(input) 

- [x]	是否全为大写字母
>  sAllUpperCase: function(input) 

- [x]	字符串为空时，默认值
> defaultString: function(input, defaultStr) 

- [x]	字符串为空时，默认值
>defaultIfBlank: function(input, defaultStr) 
- [x]	字符串为空时，默认值
> defaultIfEmpty: function(input, defaultStr) 

- [x]		//字符串反转
	>	reverse: function(input) 
- [x]		//删掉特殊字符(英文状态下)
	>	removeSpecialCharacter: function(input) 

- [x]		//只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
	>	isSpecialCharacterAlphanumeric: function(input) 
- [x]		/**
		 * @param {String} message
		 * @param {Array} arr
		 * 消息格式化
		 */
    >	format: function(message, arr) 

- [x]		/**
		 * 把连续出现多次的字母字符串进行压缩。如输入:aaabbbbcccccd  输出:3a4b5cd
		 * @param {String} input
		 * @param {Boolean} ignoreCase : true or false 
		 */
	>	compressRepeatedStr: function(input, ignoreCase) 
- [x]		//中文校验
	>	isChinese: function(input) 

- [x]	//去掉中文字符
	>	removeChinese: function(input) 
- [x]		//转义元字符
	>	escapeMetacharacter: function(input) 

- [x]		//转义字符串中的元字符
	>	escapeMetacharacterOfStr: function(input) 
- [x]		//中文转为unicode编码
	>	chineseToUnicode: function(input) 
### 5、简单四则运算； 
- [x]   //加法
	>	add: function(operandLeft, operandRight) 
- [x]   //减法
	>	subtract: function(operandLeft, operandRight) 

- [x]        //乘法
	>	multiply: function(operandLeft, operandRight)

- [x]    //除法
	>	divide: function(operandLeft, operandRight) 

- [x]        //校验表达式的合法性
	>	isArithmeticExpression: function(expression) 

- [x]   //计算
	>	calculate: function(expression)

- [x]   //中缀表达式转后缀表达式
	>	infixToPostfixExpression: function(expression) 

- [x]   //中缀表达式转前缀表达式(结果以空格隔开)
	>	infixToPrefixExpression: function(expression) 

- [x]   //解决正负号问题-1转为0-1;+1转为0+1
	>	eliminatePositiveOrNegativeSign: function(expression) 

- [x]        //把中缀表达式转为前缀表达式，再计算
	>	calculateByPrefixExpression: function(expression) 

- [x]        //把中缀表达式转为后缀表达式，再计算
	>	calculateByPostfixExpression: function(expression) 

- [x]        //横式计算
	>	horizontalCalculation: function(expression) 
- [x]        //竖式计算
	>	verticalCalculation: function(expression)
### 6、正则表达式生成工具类；
- [ ]   //生成正整数范围的表达式
	>	positiveIntegerRange:function(minimum,maximum)

- [x] 排除某些字符串，即不能包含某些字符串.返回值为RegExp对象
>createRegexObjMustExclude:function(input, conditions)

- [x] 校验时排除某些字符串，即不能包含某些字符串
> isPatternMustExclude: function(input, conditions)

- [x] 必须同时包含某些字符串,返回值为RegExp对象
> createRegexObjMustContain:function()
- [x] 校验必须同时包含某些字符串
> isPatternMustContain: function(input, conditions)

---
#待续...
------

###作者 [Mr.Lin]
>QQ:1510454219@qq.com   
2017 年 08月 31日    


