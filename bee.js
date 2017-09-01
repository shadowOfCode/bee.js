/**
 * 字符串常用工具类
 * Author:LinBilin
 * Date:2017-09-01
 */
(function() {
	var Bee = Bee || {};
	//区域
	Bee.areas=BEE_AREAS||{};
	//PhoneUtils命名空间
	Bee.PhoneUtils = {
		phoneRegexs: {
			//中国电信号码段			 
			CHINA_TELECOM_PATTERN: /^(?:\+86)?1(?:33|53|7[37]|8[019])\d{8}$|^(?:\+86)?1700\d{7}$/,
			//中国联通号码段
			CHINA_UNICOM_PATTERN: /^(?:\+86)?1(?:3[0-2]|4[5]|5[56]|7[56]|8[56])\d{8}$|^(?:\+86)?170[7-9]\d{7}$/,
			//中国移动号码段
			CHINA_MOBILE_PATTERN: /^(?:\+86)?1(?:3[4-9]|4[7]|5[0-27-9]|7[8]|8[2-478])\d{8}$|^(?:\+86)?1705\d{7}$/,
			//电话座机号码段
			PHONE_CALL_PATTERN: /^(?:\(\d{3,4}\)|\d{3,4}-)?\d{7,8}(?:-\d{1,4})?$/,
			//手机号码
			PHONE_PATTERN: /^(?:\+86)?(?:13\d|14[57]|15[0-35-9]|17[35-8]|18\d)\d{8}$|^(?:\+86)?170[057-9]\d{7}$/,
			//手机号简单校验，不根据运营商分类
			PHONE_SIMPLE_PATTERN: /^(?:\+86)?1\d{10}$/
		},
		//电话号码
		isPhoneCallNum: function(input) {
			return this.phoneRegexs.PHONE_CALL_PATTERN.test(input);
		},
		//电信手机号码
		isChinaTelecomPhoneNum: function(input) {
			return this.phoneRegexs.CHINA_TELECOM_PATTERN.test(input);
		},
		//中国联通
		isChinaUnicomPhoneNum: function(input) {
			return this.phoneRegexs.CHINA_UNICOM_PATTERN.test(input);
		},
		//中国移动
		isChinaMobilePhoneNum: function(input) {
			return this.phoneRegexs.CHINA_MOBILE_PATTERN.test(input);
		},
		//手机号码
		isPhoneNum: function(input) {
			return this.phoneRegexs.PHONE_PATTERN.test(input);
		},
		//手机号码简单校验，只校验长度
		isPhoneNumBySize: function(input) {
			return this.phoneRegexs.PHONE_SIMPLE_PATTERN.test(input);
		}
	};
	//EmailUtils命名空间
	Bee.EmailUtils = {
		emailRegexs: {
			EMAIL_PATTERN: /^[-\w\+]+(?:\.[-\w]+)*@[-a-z0-9]+(?:\.[a-z0-9]+)*(?:\.[a-z]{2,})$/i
		},
		//邮箱格式校验
		isEmail: function(input) {
			return this.EMAIL_PATTERN.test(input);
		}
	};
	//StringUtils命名空间
	Bee.StringUtils = {
		isEmpty: function(input) {
			return input == null || input == '';
		},
		isNotEmpty: function(input) {
			return !this.isEmpty(input);
		},
		isBlank: function(input) {
			return input == null || /^\s*$/.test(input);
		},
		isNotBlank: function(input) {
			return !this.isBlank(input);
		},
		trim: function(input) {
			return input.replace(/^\s+|\s+$/, '');
		},
		trimToEmpty: function(input) {
			return input == null ? "" : this.trim(input);
		},
		startsWith: function(input, prefix) {
			return input.indexOf(prefix) === 0;
		},
		endsWith: function(input, suffix) {
			return input.lastIndexOf(suffix) === 0;
		},
		contains: function(input, searchSeq) {
			return input.indexOf(searchSeq) >= 0;
		},
		equals: function(input1, input2) {
			return input1 == input2;
		},
		equalsIgnoreCase: function(input1, input2) {
			return input1.toLocaleLowerCase() == input2.toLocaleLowerCase();
		},
		containsWhitespace: function(input) {
			return this.contains(input, ' ');
		},
		//生成指定个数的字符
		repeat: function(ch, repeatTimes) {
			var result = "";
			for(var i = 0; i < repeatTimes; i++) {
				result += ch;
			}
			return result;
		},
		deleteWhitespace: function(input) {
			return input.replace(/\s+/g, '');
		},
		rightPad: function(input, size, padStr) {
			return input + this.repeat(padStr, size);
		},
		leftPad: function(input, size, padStr) {
			return this.repeat(padStr, size) + input;
		},
		//首小写字母转大写
		capitalize: function(input) {
			var strLen = 0;
			if(input == null || (strLen = input.length) == 0) {
				return input;
			}
			return input.replace(/^[a-z]/, function(matchStr) {
				return matchStr.toLocaleUpperCase();
			});
		},
		//首大写字母转小写
		uncapitalize: function(input) {
			var strLen = 0;
			if(input == null || (strLen = input.length) == 0) {
				return input;
			}
			return input.replace(/^[A-Z]/, function(matchStr) {
				return matchStr.toLocaleLowerCase();
			});
		},
		//大写转小写，小写转大写
		swapCase: function(input) {
			return input.replace(/[a-z]/ig, function(matchStr) {
				if(matchStr >= 'A' && matchStr <= 'Z') {
					return matchStr.toLocaleLowerCase();
				} else if(matchStr >= 'a' && matchStr <= 'z') {
					return matchStr.toLocaleUpperCase();
				}
			});
		},
		//统计含有的子字符串的个数
		countMatches: function(input, sub) {
			if(this.isEmpty(input) || this.isEmpty(sub)) {
				return 0;
			}
			var count = 0;
			var index = 0;
			while((index = input.indexOf(sub, index)) != -1) {
				index += sub.length;
				count++;
			}
			return count;
		},
		//只包含字母
		isAlpha: function(input) {
			return /^[a-z]+$/i.test(input);
		},
		//只包含字母、空格
		isAlphaSpace: function(input) {
			return /^[a-z\s]*$/i.test(input);
		},
		//只包含字母、数字
		isAlphanumeric: function(input) {
			return /^[a-z0-9]+$/i.test(input);
		},
		//只包含字母、数字和空格
		isAlphanumericSpace: function(input) {
			return /^[a-z0-9\s]*$/i.test(input);
		},
		//数字
		isNumeric: function(input) {
			return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(input);
		},
		//小数
		isDecimal: function(input) {
			return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(input);
		},
		//负小数
		isNegativeDecimal: function(input) {
			return /^\-?(?:0|[1-9]\d*)\.\d+$/.test(input);
		},
		//正小数
		isPositiveDecimal: function(input) {
			return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(input);
		},
		//整数
		isInteger: function(input) {
			return /^[-+]?(?:0|[1-9]\d*)$/.test(input);
		},
		//正整数
		isPositiveInteger: function(input) {
			return /^\+?(?:0|[1-9]\d*)$/.test(input);
		},
		//负整数
		isNegativeInteger: function(input) {
			return /^\-?(?:0|[1-9]\d*)$/.test(input);
		},
		//只包含数字和空格
		isNumericSpace: function(input) {
			return /^[\d\s]*$/.test(input);
		},
		isWhitespace: function(input) {
			return /^\s*$/.test(input);
		},
		isAllLowerCase: function(input) {
			return /^[a-z]+$/.test(input);
		},
		isAllUpperCase: function(input) {
			return /^[A-Z]+$/.test(input);
		},
		defaultString: function(input, defaultStr) {
			return input == null ? defaultStr : input;
		},
		defaultIfBlank: function(input, defaultStr) {
			return this.isBlank(input) ? defaultStr : input;
		},
		defaultIfEmpty: function(input, defaultStr) {
			return this.isEmpty(input) ? defaultStr : input;
		},
		//字符串反转
		reverse: function(input) {
			if(this.isBlank(input)) {
				input;
			}
			return input.split("").reverse().join("");
		},
		//删掉特殊字符(英文状态下)
		removeSpecialCharacter: function(input) {
			return input.replace(/[!-/:-@\[-`{-~]/g, "");
		},
		//只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
		isSpecialCharacterAlphanumeric: function(input) {
			return /^[!-~]+$/.test(input);
		},
		/**
		 * @param {String} message
		 * @param {Array} arr
		 * 消息格式化
		 */
		format: function(message, arr) {
			return message.replace(/{(\d+)}/g, function(matchStr, group1) {
				return arr[group1];
			});
		},
		/**
		 * 把连续出现多次的字母字符串进行压缩。如输入:aaabbbbcccccd  输出:3a4b5cd
		 * @param {String} input
		 * @param {Boolean} ignoreCase : true or false 
		 */
		compressRepeatedStr: function(input, ignoreCase) {
			var pattern = new RegExp("([a-z])\\1+", ignoreCase ? "ig" : "g");
			return result = input.replace(pattern, function(matchStr, group1) {
				return matchStr.length + group1;
			});
		},
		//中文校验
		isChinese: function(input) {
			return /^[\u4E00-\u9FA5]+$/.test(input);
		},
		//去掉中文字符
		removeChinese: function(input) {
			return input.replace(/[\u4E00-\u9FA5]+/gm, "");
		},
		//转义元字符
		escapeMetacharacter: function(input) {
			var metacharacter = "^$()*+.[]|\\-?{}";
			if(metacharacter.indexOf(input) >= 0) {
				input = "\\" + input;
			}
			return input;
		},
		//转义字符串中的元字符
		escapeMetacharacterOfStr: function(input) {
			return input.replace(/[-$^()*+.\[\]|\\?{}]/gm, "\\$&");
		},
		//中文转为unicode编码
		chineseToUnicode: function(input) {
			return input.replace(/[\u4E00-\u9FA5]/g, function(matchStr) {
				return "\\u" + matchStr.charCodeAt(0).toString(16);　　　　　　
			});
		}

	};
	//ObjectUtils命名空间
	Bee.ObjectUtils = {

	};
	//IdCardUtils命名空间
	Bee.IdCardUtils = {			
		idCardRegex: {
			//18位身份证简单校验
			IDCARD_18_SIMPLE_PATTERN: /^(?:1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5])\d{4}(?:1[89]|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}(?:\d|[xX])$/,
			//15位身份证简单校验
			IDCARD_15_SIMPLE_PATTERN: /^(?:1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5])\d{4}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}$/
		},
		//18位身份证简单校验
		isSimpleIdCard18: function(idCard) {
			return this.idCardRegex.IDCARD_18_SIMPLE_PATTERN.test(idCard);
		},
		//15位身份证简单校验
		isSimpleIdCard15: function(idCard) {
			return this.idCardRegex.IDCARD_18_SIMPLE_PATTERN.test(idCard);
		},
		//18位身份证校验码校验
		checkCode: function(idCard) {
			var multiplier = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
			var idDatas = idCard.split("");
			var len = 17;
			var sum = 0;
			for(var i = 0; i < len; i++) {
				sum += idDatas[i] * multiplier[i];
			}
			var remainder = sum % 11;
			var checkCodeArr = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
			var checkCode = checkCodeArr[remainder];
			return checkCode === idCard[17];
		},
		//18位身份证严格校验
		isIdCard18: function(idCard) {
			//先校验格式
			if(this.isSimpleIdCard18(idCard)) {
				//校验日期时间是否合法
				var dateStr = idCard.substr(6, 8);
				var dateStrNew = dateStr.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3");
				var dateObj = new Date(dateStrNew);
				var month = dateObj.getMonth() + 1;
				if(parseInt(dateStr.substr(4, 2)) === month) {
					return this.checkCode(idCard);
				}
			}
			return false;
		},
		//根据18身份证号码获取人员信息
		getPersonInfo18:function(idCard){			
			var age=0;
			var birthday='';
			var address='';
			var sex='';
			address=Bee.areas[idCard.substr(0,2)+'0000']+' '+Bee.areas[idCard.substr(0,4)+'00']+' '+Bee.areas[idCard.substr(0,6)];
			sex=(idCard.substr(16,1)%2===0)?'女':'男';
			birthday=idCard.substr(6,8).replace(/(\d{4})(\d{2})(\d{2})/,'$1年$2月$3日');
			age=new Date().getFullYear()-idCard.substr(6,4)+1;
			var person={'address':address,'sex':sex,'birthday':birthday,'age':age};
			return person;
		}
	};
	//ArrayUtils命名空间
	Bee.ArrayUtils = {
		//获取最大值
		getMaxValue: function(arr) {
			return Math.max.apply(Math, arr);
		},
		//获取最小值
		getMinValue: function(arr) {
			return Math.min.apply(Math, arr);
		}
	};
	//DateUtils命名空间
	Bee.DateUtils = {
		patterns: {
			PATTERN_ERA: 'G', //Era 标志符 Era strings. For example: "AD" and "BC"
			PATTERN_YEAR: 'y', //年
			PATTERN_MONTH: 'M', //月份
			PATTERN_DAY_OF_MONTH: 'd', //月份的天数
			PATTERN_HOUR_OF_DAY1: 'k', //一天中的小时数（1-24）
			PATTERN_HOUR_OF_DAY0: 'H', //24小时制，一天中的小时数（0-23）
			PATTERN_MINUTE: 'm', //小时中的分钟数
			PATTERN_SECOND: 's', //秒
			PATTERN_MILLISECOND: 'S', //毫秒
			PATTERN_DAY_OF_WEEK: 'E', //一周中对应的星期，如星期一，周一
			PATTERN_DAY_OF_YEAR: 'D', //一年中的第几天
			PATTERN_DAY_OF_WEEK_IN_MONTH: 'F', //一月中的第几个星期(会把这个月总共过的天数除以7,不够准确，推荐用W)
			PATTERN_WEEK_OF_YEAR: 'w', //一年中的第几个星期
			PATTERN_WEEK_OF_MONTH: 'W', //一月中的第几星期(会根据实际情况来算)
			PATTERN_AM_PM: 'a', //上下午标识
			PATTERN_HOUR1: 'h', //12小时制 ，am/pm 中的小时数（1-12）
			PATTERN_HOUR0: 'K', //和h类型
			PATTERN_ZONE_NAME: 'z', //时区名
			PATTERN_ZONE_VALUE: 'Z', //时区值
			PATTERN_WEEK_YEAR: 'Y', //和y类型
			PATTERN_ISO_DAY_OF_WEEK: 'u',
			PATTERN_ISO_ZONE: 'X'
		},
		week: {
			'ch': {
				"0": "\u65e5",
				"1": "\u4e00",
				"2": "\u4e8c",
				"3": "\u4e09",
				"4": "\u56db",
				"5": "\u4e94",
				"6": "\u516d"
			},
			'en': {
				"0": "Sunday",
				"1": "Monday",
				"2": "Tuesday",
				"3": "Wednesday",
				"4": "Thursday",
				"5": "Friday",
				"6": "Saturday"
			}
		},
		//获取当前时间
		getCurrentTime: function() {
			var today = new Date();
			var year = today.getFullYear();
			var month = today.getMonth() + 1;
			var day = today.getDate();
			var hours = today.getHours();
			var minutes = today.getMinutes();
			var seconds = today.getSeconds();
			var timeString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
			return timeString;
		},
		/*
		 * 比较时间大小
		 * time1>time2 return 1
		 * time1<time2 return -1
		 * time1==time2 return 0
		 */
		compareTime: function(time1, time2) {
			if(Date.parse(time1.replace(/-/g, "/")) > Date.parse(time2.replace(/-/g, "/"))) {
				return 1;
			} else if(Date.parse(time1.replace(/-/g, "/")) < Date.parse(time2.replace(/-/g, "/"))) {
				return -1;
			} else if(Date.parse(time1.replace(/-/g, "/")) == Date.parse(time2.replace(/-/g, "/"))) {
				return 0;
			}
		},
		//是否闰年
		isLeapYear: function(year) {
			return((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
		},
		//获取某个月的天数，从0开始
		getDaysOfMonth: function(year, month) {
			return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		getDaysOfMonth2: function(year, month) {
			// 将天置为0，会获取其上个月的最后一天
			month = parseInt(month) + 1;
			var date = new Date(year, month, 0);
			return date.getDate();
		},
		/*距离现在几天的日期：负数表示今天之前的日期，0表示今天，整数表示未来的日期
		 * 如-1表示昨天的日期，0表示今天，2表示后天
		 */
		fromToday: function(days) {
			var today = new Date();
			today.setDate(today.getDate() + days);
			var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
			return date;
		},
		/**
		 * 日期时间格式化
		 * @param {Object} dateTime 需要格式化的日期时间
		 * @param {String} pattern  格式化的模式，如yyyy-MM-dd hh(HH):mm:ss.S a k K E D F w W z Z
		 */
		formt: function(dateTime, pattern) {
			var date = new Date(dateTime);
			if(Bee.StringUtils.isBlank(pattern)) {
				return date.toLocaleString();
			}
			return pattern.replace(/([a-z])\1*/ig, function(matchStr, group1) {
				var replacement = "";
				switch(group1) {
					case Bee.DateUtils.patterns.PATTERN_ERA: //G
						break;
					case Bee.DateUtils.patterns.PATTERN_WEEK_YEAR: //Y
					case Bee.DateUtils.patterns.PATTERN_YEAR: //y
						replacement = date.getFullYear();
						break;
					case Bee.DateUtils.patterns.PATTERN_MONTH: //M
						var month = date.getMonth() + 1;
						replacement = (month < 10 && matchStr.length >= 2) ? "0" + month : month;
						break;
					case Bee.DateUtils.patterns.PATTERN_DAY_OF_MONTH: //d
						var days = date.getDate();
						replacement = (days < 10 && matchStr.length >= 2) ? "0" + days : days;
						break;
					case Bee.DateUtils.patterns.PATTERN_HOUR_OF_DAY1: //k(1~24)
						var hours24 = date.getHours();
						replacement = hours24;
						break;
					case Bee.DateUtils.patterns.PATTERN_HOUR_OF_DAY0: //H(0~23)
						var hours24 = date.getHours();
						replacement = (hours24 < 10 && matchStr.length >= 2) ? "0" + hours24 : hours24;
						break;
					case Bee.DateUtils.patterns.PATTERN_MINUTE: //m
						var minutes = date.getMinutes();
						replacement = (minutes < 10 && matchStr.length >= 2) ? "0" + minutes : minutes;
						break;
					case Bee.DateUtils.patterns.PATTERN_SECOND: //s
						var seconds = date.getSeconds();
						replacement = (seconds < 10 && matchStr.length >= 2) ? "0" + seconds : seconds;
						break;
					case Bee.DateUtils.patterns.PATTERN_MILLISECOND: //S
						var milliSeconds = date.getMilliseconds();
						replacement = milliSeconds;
						break;
					case Bee.DateUtils.patterns.PATTERN_DAY_OF_WEEK: //E
						var day = date.getDay();
						replacement = Bee.DateUtils.week['ch'][day];
						break;
					case Bee.DateUtils.patterns.PATTERN_DAY_OF_YEAR: //D
						replacement = Bee.DateUtils.dayOfTheYear(date);
						break;
					case Bee.DateUtils.patterns.PATTERN_DAY_OF_WEEK_IN_MONTH: //F
						var days = date.getDate();
						replacement = Math.floor(days / 7);
						break;
					case Bee.DateUtils.patterns.PATTERN_WEEK_OF_YEAR: //w
						var days = Bee.DateUtils.dayOfTheYear(date);
						replacement = Math.ceil(days / 7);
						break;
					case Bee.DateUtils.patterns.PATTERN_WEEK_OF_MONTH: //W
						var days = date.getDate();
						replacement = Math.ceil(days / 7);
						break;
					case Bee.DateUtils.patterns.PATTERN_AM_PM: //a
						var hours24 = date.getHours();
						replacement = hours24 < 12 ? "\u4e0a\u5348" : "\u4e0b\u5348";
						break;
					case Bee.DateUtils.patterns.PATTERN_HOUR1: //h(1~12)
						var hours12 = date.getHours() % 12 || 12; //0转为12
						replacement = (hours12 < 10 && matchStr.length >= 2) ? "0" + hours12 : hours12;
						break;
					case Bee.DateUtils.patterns.PATTERN_HOUR0: //K(0~11)
						var hours12 = date.getHours() % 12;
						replacement = hours12;
						break;
					case Bee.DateUtils.patterns.PATTERN_ZONE_NAME: //z
						replacement = Bee.DateUtils.getZoneNameValue(date)['name'];
						break;
					case Bee.DateUtils.patterns.PATTERN_ZONE_VALUE: //Z
						replacement = Bee.DateUtils.getZoneNameValue(date)['value'];
						break;
					case Bee.DateUtils.patterns.PATTERN_ISO_DAY_OF_WEEK: //u
						break;
					case Bee.DateUtils.patterns.PATTERN_ISO_ZONE: //X
						break;
					default:
						break;
				}
				return replacement;
			});
		},
		/**
		 * 计算一个日期是当年的第几天
		 * @param {Object} date
		 */
		dayOfTheYear: function(date) {
			var obj = new Date(date);
			var year = obj.getFullYear();
			var month = obj.getMonth(); //从0开始
			var days = obj.getDate();
			var daysArr = [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			for(var i = 0; i < month; i++) {
				days += daysArr[i];
			}
			return days;
		},
		//获得时区名和值
		getZoneNameValue: function(dateObj) {
			var date = new Date(dateObj);
			date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
			var arr = date.toString().match(/([A-Z]+)([-+]\d+:?\d+)/);
			var obj = {
				'name': arr[1],
				'value': arr[2]
			};
			return obj;
		}
	};
	//简单四则运算
	Bee.ElementaryArithmeticUtils = {
		//运算符优先级
		operatorPrecedence: {
			'+': 0,
			'-': 0,
			'*': 1,
			'×': 1,
			'÷': 1,
			'\/': 1
		},
		//运算符
		operator: {
			'+': '+',
			'-': '-',
			'*': '*',
			'×': '*',
			'÷': '/',
			'\/': '/'
		},
		//加法
		add: function(operandLeft, operandRight) {
			var operand1 = operandLeft.toString();
			var operand2 = operandRight.toString();
			var decimalPlace1 = operand1.indexOf('.') >= 0 ? operand1.split('.')[1].length : 0;
			var decimalPlace2 = operand2.indexOf('.') >= 0 ? operand2.split('.')[1].length : 0;
			var multiple = Math.pow(10, Math.max(decimalPlace1, decimalPlace2));
			return(operandLeft * multiple + operandRight * multiple) / multiple;
		},
		//减法
		subtract: function(operandLeft, operandRight) {
			var operand1 = operandLeft.toString();
			var operand2 = operandRight.toString();
			var decimalPlace1 = operand1.indexOf('.') >= 0 ? operand1.split('.')[1].length : 0;
			var decimalPlace2 = operand2.indexOf('.') >= 0 ? operand2.split('.')[1].length : 0;
			var multiple = Math.pow(10, Math.max(decimalPlace1, decimalPlace2));
			//toFixed避免多出来小数位，如 11.3-10.12000=1.1800000000000015
			var decimalPlace = (decimalPlace1 >= decimalPlace2) ? decimalPlace1 : decimalPlace2;
			return((operandLeft * multiple - operandRight * multiple) / multiple).toFixed(decimalPlace);
		},
		//乘法
		multiply: function(operandLeft, operandRight) {
			var operand1 = operandLeft.toString();
			var operand2 = operandRight.toString();
			var decimalPlace1 = operand1.indexOf('.') >= 0 ? operand1.split('.')[1].length : 0;
			var decimalPlace2 = operand2.indexOf('.') >= 0 ? operand2.split('.')[1].length : 0;
			var multiple1 = Math.pow(10, decimalPlace1);
			var multiple2 = Math.pow(10, decimalPlace2);
			return((operandLeft * multiple1) * (operandRight * multiple2)) / Math.pow(10, decimalPlace1 + decimalPlace2);
		},
		//除法
		divide: function(operandLeft, operandRight) {
			var operand1 = operandLeft.toString();
			var operand2 = operandRight.toString();
			var decimalPlace1 = operand1.indexOf('.') >= 0 ? operand1.split('.')[1].length : 0;
			var decimalPlace2 = operand2.indexOf('.') >= 0 ? operand2.split('.')[1].length : 0;
			var multiple1 = Math.pow(10, decimalPlace1);
			var multiple2 = Math.pow(10, decimalPlace2);
			return((operandLeft * multiple1) / (operandRight * multiple2)) * Math.pow(10, decimalPlace2 - decimalPlace1);
		},
		//校验表达式的合法性
		isArithmeticExpression: function(expression) {
			try {
				expression = expression.replace(/÷/g, '/').replace(/×/g, '*');
				var result = eval(expression);
			} catch(e) {
				return false;
			}
			return true;
		},
		//计算
		calculate: function(expression) {
			var value = eval(expression);
			return value;
		},
		//中缀表达式转后缀表达式
		infixToPostfixExpression: function(expression) {
			expression = Bee.StringUtils.deleteWhitespace(expression);
			expression = this.eliminatePositiveOrNegativeSign(expression);
			var operatorStack = [];
			var resultStack = [];
			var elementArr = expression.match(/[-+\/÷*×()]|(?:[1-9]\d*|0)(?:\.\d+)?/g);
			var size = elementArr.length;
			for(var i = 0; i < size; i++) {
				if(Bee.StringUtils.isNumeric(elementArr[i])) {
					//如果是数值
					resultStack.push(elementArr[i]);
				} else {
					//操作符栈顶元素
					var operatorStackTopElement = operatorStack.length === 0 ? '' : operatorStack[operatorStack.length - 1];
					//运算符
					if(operatorStack.length === 0 || elementArr[i] === '(' || operatorStackTopElement === '(' || this.operatorPrecedence[elementArr[i]] > this.operatorPrecedence[operatorStackTopElement]) {
						//操作符栈为空或栈顶元素为右括号')'，或操作符的优先级比栈顶运算符高或相等，直接入栈
						operatorStack.push(elementArr[i]);
					} else {
						//如果是右括号")"，则依次弹出操作符栈顶的运算符，并压入结果栈，直到遇到左括号'('为止，左右括号不压入结果栈；
						if(elementArr[i] === ')') {
							for(var index = operatorStack.length - 1; index >= 0; index--) {
								if(operatorStack[index] === '(') {
									operatorStack.pop();
									break;
								} else {
									resultStack.push(operatorStack.pop());
								}
							}
						} else {
							//将符号栈顶的运算符弹出并压入到结果栈中，再次与符号栈中新的栈顶运算符相比较
							resultStack.push(operatorStack.pop());
							i--;
							continue;
						}
					}
				}
			}
			//处理操作符栈剩余的符号		
			if(operatorStack.length > 0) {
				for(var j = operatorStack.length - 1; j >= 0; j--) {
					resultStack.push(operatorStack.pop());
				}
			}
			//结果返回
			return resultStack.join(' ');
		},
		//中缀表达式转前缀表达式(结果以空格隔开)
		infixToPrefixExpression: function(expression) {
			expression = Bee.StringUtils.deleteWhitespace(expression);
			expression = this.eliminatePositiveOrNegativeSign(expression);
			var operatorStack = [];
			var resultStack = [];
			var elementArr = expression.match(/[-+\/÷*×()]|(?:[1-9]\d*|0)(?:\.\d+)?/g);
			var size = elementArr.length;
			for(var i = size - 1; i >= 0; i--) {
				if(Bee.StringUtils.isNumeric(elementArr[i])) {
					//如果是数值
					resultStack.push(elementArr[i]);
				} else {
					//操作符栈顶元素
					var operatorStackTopElement = operatorStack.length === 0 ? '' : operatorStack[operatorStack.length - 1];
					//运算符
					if(operatorStack.length === 0 || elementArr[i] === ')' || operatorStackTopElement === ')' || this.operatorPrecedence[elementArr[i]] >= this.operatorPrecedence[operatorStackTopElement]) {
						//操作符栈为空或栈顶元素为右括号')'，或操作符的优先级比栈顶运算符高或相等，直接入栈
						operatorStack.push(elementArr[i]);
					} else {
						//如果是左括号"("，则依次弹出操作符栈顶的运算符，并压入结果栈，直到遇到右括号')'为止，左右括号不压入结果栈；
						if(elementArr[i] === '(') {
							for(var index = operatorStack.length - 1; index >= 0; index--) {
								if(operatorStack[index] === ')') {
									operatorStack.pop();
									break;
								} else {
									resultStack.push(operatorStack.pop());
								}
							}
						} else {
							//将符号栈顶的运算符弹出并压入到结果栈中，再次与符号栈中新的栈顶运算符相比较
							resultStack.push(operatorStack.pop());
							i++;
							continue;
						}

					}
				}
			}
			//处理操作符栈剩余的符号		
			if(operatorStack.length > 0) {
				for(var j = operatorStack.length - 1; j >= 0; j--) {
					resultStack.push(operatorStack.pop());
				}
			}
			//结果返回
			return resultStack.reverse().join(' ');
		},
		//解决正负号问题-1转为0-1;+1转为0+1
		eliminatePositiveOrNegativeSign: function(expression) {
			return expression.replace(/(\(|^)([-+])/g, '$10$2');
		},
		//把中缀表达式转为前缀表达式，再计算
		calculateByPrefixExpression: function(expression) {
			var elementArr = this.infixToPrefixExpression(expression).split(' ');
			var size = elementArr.length;
			var resultStack = [];
			for(var i = size - 1; i >= 0; i--) {
				if(Bee.StringUtils.isNumeric(elementArr[i])) {
					//如果是数值
					resultStack.push(elementArr[i]);
				} else {
					var operand1 = resultStack.pop();
					var operand2 = resultStack.pop();
					var result;
					switch(elementArr[i]) {
						case '+':
							result = Bee.ElementaryArithmeticUtils.add(operand1, operand2);
							break;
						case '-':
							result = Bee.ElementaryArithmeticUtils.subtract(operand1, operand2);
							break;
						case '×':
						case '*':
							result = Bee.ElementaryArithmeticUtils.multiply(operand1, operand2);
							break;
						case '\/':
						case '÷':
							result = Bee.ElementaryArithmeticUtils.divide(operand1, operand2);
							break;
						default:
							result = '';
							alert("The operator 【" + elementArr[i] + "】 is not legal");
							break;
					}
					resultStack.push(result);
				}
			}
			return resultStack;
		},
		//把中缀表达式转为后缀表达式，再计算
		calculateByPostfixExpression: function(expression) {
			var elementArr = this.infixToPostfixExpression(expression).split(' ');
			var size = elementArr.length;
			var resultStack = [];
			for(var i = 0; i < size; i++) {
				if(Bee.StringUtils.isNumeric(elementArr[i])) {
					//如果是数值
					resultStack.push(elementArr[i]);
				} else {
					var operand1 = resultStack.pop();
					var operand2 = resultStack.pop();
					var result;
					switch(elementArr[i]) {
						case '+':
							result = Bee.ElementaryArithmeticUtils.add(operand2, operand1);
							break;
						case '-':
							result = Bee.ElementaryArithmeticUtils.subtract(operand2, operand1);
							break;
						case '×':
						case '*':
							result = Bee.ElementaryArithmeticUtils.multiply(operand2, operand1);
							break;
						case '\/':
						case '÷':
							result = Bee.ElementaryArithmeticUtils.divide(operand2, operand1);
							break;
						default:
							result = '';
							alert("The operator 【" + elementArr[i] + "】 is not legal");
							break;
					}
					resultStack.push(result);
				}
			}
			return resultStack;
		},
		//横式计算
		horizontalCalculation: function(expression) {
			expression = Bee.StringUtils.deleteWhitespace(expression);
			expression = this.eliminatePositiveOrNegativeSign(expression);
			var result = expression;
			while(expression.indexOf('(') >= 0) {
				expression = expression.replace(/\([^()]+\)/g, function(matchStr) {
					return eval(matchStr);
				});
				result += '=' + expression;
			}
			while(expression.indexOf('[') >= 0) {
				expression = expression.replace(/\[[^\[\]]+\]/g, function(matchStr) {
					return eval(matchStr);
				});
				result += '=' + expression;
			}
			while(expression.indexOf('{') >= 0) {
				expression = expression.replace(/\{[^{}]+\}/g, function(matchStr) {
					return eval(matchStr);
				});
				result += '=' + expression;
			}
			var pattern = /(?:[1-9]\d*|0)(?:\.\d+)?[*/](?:[1-9]\d*|0)(?:\.\d+)?/;
			while(expression.indexOf('*') >= 0 || expression.indexOf('/') >= 0) {
				expression = expression.replace(pattern, function(matchStr, index) {
					return eval(matchStr);
				});
				result += '=' + expression;
			}
			if(/[-+*/]/.test(expression)) {
				result += '=' + eval(expression);
			}
			return result;
		},
		//竖式计算
		verticalCalculation: function(expression) {
			var result = this.horizontalCalculation(expression);
			return result.replace(/=/g, "\n$&");
		}
	};
	//自动生成正则表达式
	Bee.RegexUtils={
		//生成正整数范围的表达式
		positiveIntegerRange:function(minimum,maximum){},
		/**
		 * 排除某些字符串，即不能包含某些字符串.返回值为RegExp对象
		 * @param {Object} conditions:里面有多个属性，如下：
		 * 
		 * @param {String} matcherFlag 匹配标识
		 * 0:数字；1：字母；2：小写字母；3:大写字母；4：特殊字符,指英文状态下的标点符号及括号等；5:中文;
		 * 6:数字和字母；7：数字和小写字母；8：数字和大写字母；9：数字、字母和特殊字符；10：数字和中文；
		 * 11：小写字母和特殊字符；12：大写字母和特殊字符；13：字母和特殊字符；14：小写字母和中文；15：大写字母和中文；
		 * 16：字母和中文；17：特殊字符、和中文；18：特殊字符、字母和中文；19：特殊字符、小写字母和中文；20：特殊字符、大写字母和中文；
		 * 100：所有字符;
		 * @param {Array} targetStrArr 排除的字符串，数组格式
		 * @param {String} length 长度，可为空。1,2表示长度1到2之间；10，表示10个以上字符；5表示长度为5
		 * @param {Boolean} ignoreCase 是否忽略大小写
		 * 
		 * conditions={matcherFlag:"0",targetStrArr:[],length:"",ignoreCase:true}
		 */
		createRegexObjMustExclude:function(input, conditions){
			
			//参数
			var matcherFlag = conditions.matcherFlag;
			var targetStrArr = conditions.targetStrArr;
			var length = conditions.length;
			var ignoreCase = conditions.ignoreCase;
			//拼正则
			var size = targetStrArr.length;
			var regex = (size == 0) ? "^" : "^(?!.*(?:{0}))";
			var subPattern = "";
			for(var i = 0; i < size; i++) {
				targetStrArr[i] = Bee.StringUtils.escapeMetacharacterOfStr(targetStrArr[i]);
				subPattern += targetStrArr[i];
				if(i != size - 1) {
					subPattern += "|";
				}
			}
			regex = Bee.StringUtils.format(regex, [subPattern]);
			switch(matcherFlag) {
				case '0':
					regex += "\\d";
					break;
				case '1':
					regex += "[a-zA-Z]";
					break;
				case '2':
					regex += "[a-z]";
					break;
				case '3':
					regex += "[A-Z]";
					break;
				case '4':
					regex += "[!-/:-@\[-`{-~]";
					break;
				case '5':
					regex += "[\u4E00-\u9FA5]";
					break;
				case '6':
					regex += "[a-zA-Z0-9]";
					break;
				case '7':
					regex += "[a-z0-9]";
					break;
				case '8':
					regex += "[A-Z0-9]";
					break;
				case '9':
					regex += "[!-~]";
					break;
				case '10':
					regex += "[0-9\u4E00-\u9FA5]";
					break;
				case '11':
					regex += "[a-z!-/:-@\[-`{-~]";
					break;
				case '12':
					regex += "[A-Z!-/:-@\[-`{-~]";
					break;
				case '13':
					regex += "[a-zA-Z!-/:-@\[-`{-~]";
					break;
				case '14':
					regex += "[a-z\u4E00-\u9FA5]";
					break;
				case '15':
					regex += "[A-Z\u4E00-\u9FA5]";
					break;
				case '16':
					regex += "[a-zA-Z\u4E00-\u9FA5]";
					break;
				case '17':
					regex += "[\u4E00-\u9FA5!-/:-@\[-`{-~]";
					break;
				case '18':
					regex += "[\u4E00-\u9FA5!-~]";
					break;
				case '19':
					regex += "[a-z\u4E00-\u9FA5!-/:-@\[-`{-~]";
					break;
				case '20':
					regex += "[A-Z\u4E00-\u9FA5!-/:-@\[-`{-~]";
					break;
				case '100':
					regex += "[\s\S]";
					break;
				default:
					alert(matcherFlag + ":This type is not supported!");
			}
			regex += Bee.StringUtils.isNotBlank(length) ? "{" + length + "}" : "+";
			regex += "$";
			var pattern = new RegExp(regex, ignoreCase ? "i" : "");
			return pattern;
		},
		
		/**
		 * 校验时排除某些字符串，即不能包含某些字符串
		 * @param {Object} conditions:里面有多个属性，如下：
		 * 
		 * @param {String} matcherFlag 匹配标识
		 * 0:数字；1：字母；2：小写字母；3:大写字母；4：特殊字符,指英文状态下的标点符号及括号等；5:中文;
		 * 6:数字和字母；7：数字和小写字母；8：数字和大写字母；9：数字、字母和特殊字符；10：数字和中文；
		 * 11：小写字母和特殊字符；12：大写字母和特殊字符；13：字母和特殊字符；14：小写字母和中文；15：大写字母和中文；
		 * 16：字母和中文；17：特殊字符、和中文；18：特殊字符、字母和中文；19：特殊字符、小写字母和中文；20：特殊字符、大写字母和中文；
		 * 100：所有字符;
		 * @param {Array} targetStrArr 排除的字符串，数组格式
		 * @param {String} length 长度，可为空。1,2表示长度1到2之间；10，表示10个以上字符；5表示长度为5
		 * @param {Boolean} ignoreCase 是否忽略大小写
		 * conditions={matcherFlag:"0",targetStrArr:[],length:"",ignoreCase:true}
		 */
		isPatternMustExclude: function(input, conditions) {
			var pattern = this.createRegexObjMustExclude(input, conditions);
			return pattern.test(input);
		},
		/**
		 * 必须同时包含某些字符串,返回值为RegExp对象
		 * @param {String} input
		 * @param {Object} conditions:里面有多个属性，如下：
		 * 
		 * @param {String} matcherFlag 匹配标识
		 * 0:数字；1：字母；2：小写字母；3:大写字母；4：特殊字符,指英文状态下的标点符号及括号等；5:中文;
		 * 6:数字和字母；7：数字和小写字母；8：数字和大写字母；9：数字、字母和特殊字符；10：数字和中文；
		 * 11：小写字母和特殊字符；12：大写字母和特殊字符；13：字母和特殊字符；14：小写字母和中文；15：大写字母和中文；
		 * 16：字母和中文；17：特殊字符、和中文；18：特殊字符、字母和中文；19：特殊字符、小写字母和中文；20：特殊字符、大写字母和中文；
		 * 100：所有字符;
		 * @param {Array} targetStrArr 排除的字符串，数组格式
		 * @param {String} length 长度，可为空。1,2表示长度1到2之间；10，表示10个以上字符；5表示长度为5
		 * @param {Boolean} ignoreCase 是否忽略大小写
		 * conditions={matcherFlag:"0",targetStrArr:[],length:"",ignoreCase:true}
		 * 
		 */
		createRegexObjMustContain:function(){
			
			//参数
			var matcherFlag = conditions.matcherFlag;
			var targetStrArr = conditions.targetStrArr;
			var length = conditions.length;
			var ignoreCase = conditions.ignoreCase;
			//创建正则
			var size = targetStrArr.length;
			var regex = "^";
			var subPattern = "";
			for(var i = 0; i < size; i++) {
				targetStrArr[i] = Bee.StringUtils.escapeMetacharacterOfStr(targetStrArr[i]);
				subPattern += "(?=.*" + targetStrArr[i] + ")";
			}
			regex += subPattern;
			switch(matcherFlag) {
				case '0':
					regex += "\\d";
					break;
				case '1':
					regex += "[a-zA-Z]";
					break;
				case '2':
					regex += "[a-z]";
					break;
				case '3':
					regex += "[A-Z]";
					break;
				case '4':
					regex += "[!-/:-@\[-`{-~]";
					break;
				case '5':
					regex += "[\u4E00-\u9FA5]";
					break;
				case '6':
					regex += "[a-zA-Z0-9]";
					break;
				case '7':
					regex += "[a-z0-9]";
					break;
				case '8':
					regex += "[A-Z0-9]";
					break;
				case '9':
					regex += "[!-~]";
					break;
				case '10':
					regex += "[0-9\u4E00-\u9FA5]";
					break;
				case '11':
					regex += "[a-z!-/:-@\[-`{-~]";
					break;
				case '12':
					regex += "[A-Z!-/:-@\[-`{-~]";
					break;
				case '13':
					regex += "[a-zA-Z!-/:-@\[-`{-~]";
					break;
				case '14':
					regex += "[a-z\u4E00-\u9FA5]";
					break;
				case '15':
					regex += "[A-Z\u4E00-\u9FA5]";
					break;
				case '16':
					regex += "[a-zA-Z\u4E00-\u9FA5]";
					break;
				case '17':
					regex += "[\u4E00-\u9FA5!-/:-@\[-`{-~]";
					break;
				case '18':
					regex += "[\u4E00-\u9FA5!-~]";
					break;
				case '19':
					regex += "[a-z\u4E00-\u9FA5!-/:-@\[-`{-~]";
					break;
				case '20':
					regex += "[A-Z\u4E00-\u9FA5!-/:-@\[-`{-~]";
					break;
				case '100':
					regex += "[\s\S]";
					break;
				default:
					alert(matcherFlag + ":This type is not supported!");
			}
			regex += Bee.StringUtils.isNotBlank(length) ? "{" + length + "}" : "+";
			regex += "$";
			var pattern = new RegExp(regex, ignoreCase ? "i" : "");
			return pattern;
		},
		/**
		 * 校验必须同时包含某些字符串
		 * @param {String} input
		 * @param {Object} conditions:里面有多个属性，如下：
		 * 
		 * @param {String} matcherFlag 匹配标识
		 * 0:数字；1：字母；2：小写字母；3:大写字母；4：特殊字符,指英文状态下的标点符号及括号等；5:中文;
		 * 6:数字和字母；7：数字和小写字母；8：数字和大写字母；9：数字、字母和特殊字符；10：数字和中文；
		 * 11：小写字母和特殊字符；12：大写字母和特殊字符；13：字母和特殊字符；14：小写字母和中文；15：大写字母和中文；
		 * 16：字母和中文；17：特殊字符、和中文；18：特殊字符、字母和中文；19：特殊字符、小写字母和中文；20：特殊字符、大写字母和中文；
		 * 100：所有字符;
		 * @param {Array} targetStrArr 排除的字符串，数组格式
		 * @param {String} length 长度，可为空。1,2表示长度1到2之间；10，表示10个以上字符；5表示长度为5
		 * @param {Boolean} ignoreCase 是否忽略大小写
		 * conditions={matcherFlag:"0",targetStrArr:[],length:"",ignoreCase:true}
		 * 
		 */
		isPatternMustContain: function(input, conditions) {
			var pattern=this.createRegexObjMustContain(input, conditions);
			return pattern.test(input);
		}
	};
	//暴露给window
	window['Bee'] = Bee;
})();
