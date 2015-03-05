$(function() {
	$('.j-tooltip').tooltip();


	var prompt = "[[b;#d33682;]root]@[[b;#6c71c4;]wedding] ~$ ";
	var days_left = Math.round((new Date('2015 05 02') - new Date())/(1000*60*60*24));
	var reservation_url = "http://goo.gl/EtmNRv";
	var reservation_address = "高雄市中山區中山南路 437 號"
	
	var pictures = [picture1, picture2];

	var apt_get_command = ['update', 'upgrade', 'dist-upgrade', 'autoremove']

	var g7_weds_mono = "\
\n                                             \
\n                                              \
\n          (`-')  <-. (`-')_ (`-').-> _      \
\n    .->   ( OO).-/  \\( OO) )(OO )__ (_)     \
\n ,---(`-'(,------,--./ ,--/,--. ,'-',-(`-') \
\n'  .-(OO )|  .---|   \\ |  ||  | |  || ( OO) \
\n|  | .-, (|  '--.|  . '|  ||  `-'  ||  |  ) \
\n|  | '.(_/|  .--'|  |\\    ||  .-.  (|  |_/  \
\n|  '-'  | |  `---|  | \\   ||  | |  ||  |'-> \
\n `-----'  `------`--'  `--'`--' `--'`--'    \
\n\
\n    weds\
\n                <-. (`-')           <-. (`-')_           \
\n                   \\(OO )_     .->     \\( OO) )    .->   \
\n                ,--./  ,-.(`-')----.,--./ ,--/(`-')----. \
\n                |   `.'   ( OO).-.  |   \\ |  |( OO).-.  '\
\n                |  |'.'|  ( _) | |  |  . '|  |( _) | |  |\
\n                |  |   |  |\\|  |)|  |  |\\    | \\|  |)|  |\
\n                |  |   |  | '  '-'  |  | \\   |  '  '-'  '\
\n                `--'   `--'  `-----'`--'  `--'   `-----' \
	";

	var invitation_post = "\
\n______________________________________________________\
\n  大家好，\
\n  我們要在今年(2015)的五月二號互許終生啦！\
\n  歡迎各位親愛的捧油們一起來見證我們的婚禮，\
\n  現場將不會有任何 iphone 抽獎，請大家不用期待！\
\n______________________________________________________\
\n                 Mono    &  _  Genchi\
\n       ___           {@}  _|=|_\
\n      /___\\         /(\")\\  (\")\
\n   .---'-'---.     /((~))\\/<x>\\       _   .-.\
\n  /___________\\    ~~/@\\~~\\|_|/      <v> ((_))\
\n   | A /^\\ A |      /   \\  |||      ((_)) '-'\
\n   |   |\"|   |     /~@~@~\\ |||       '-' \
\n___|___|_|___|____/_______\\|||_________May  2  2015___\
\n";
	var wedding_help = "\
Commands: \
\n\t[[b;#268bd2;]wedding invitation]      [[b;#2aa198;]# 邀請卡內容] \
\n\t[[b;#268bd2;]wedding bride]           [[b;#2aa198;]# 關於新娘] \
\n\t[[b;#268bd2;]wedding groom]           [[b;#2aa198;]# 關於新郎] \
\n\t[[b;#268bd2;]wedding location]        [[b;#2aa198;]# 婚禮地點的 google map 連結] \
\n\t[[b;#268bd2;]wedding gown]            [[b;#2aa198;]# 婚紗照] \
	";
	var bride = "\
\n[[b;#d33682;]========= 新娘 ==========]\
\n\
\n新娘的名字是江孟蓉，高雄出生。\
\n目前在嘉義長庚醫院服務的護理師，同時也是一位極為刁鑽的 PM。\
\n最為人津津樂道的是他挑男朋友的眼光極佳。\
\n你可以透過下列臉書連結聯繫她：\
\nhttps://www.facebook.com/profile.php?id=100000138559507\
\n\
	";
	var groom = "\
\n[[b;#d33682;]========= 新郎 ==========]\
\n\
\n新郎的名字是盧俊錡，高雄出生。\
\n他是一名不專業的軟體工程師，服務於專利雲公司，擅長解決 PM 刁鑽的問題。\
\n2009 年以一名資深阿宅騙到正妹護士當女朋友得意至今。\
\nemail - genchilu@gmail.com\
\nlinkedin - https://www.linkedin.com/in/jaipandya \
\nfacebook - https://www.facebook.com/profile.php?id=100000141676197\
\ngithub - https://github.com/genchilu \
\n\
	";

	var pre_greetings;
	if (days_left >= 0) {
		pre_greetings = "\
\n\n歡迎參加俊錡和孟蓉的婚禮，距離婚禮還有 " + Math.round((new Date('2015 05 02') - new Date())/86400000) + " 天！";
	}
	else {
	pre_greetings = "\
\n\n相當遺憾，您錯過了這場盛宴。 \
\n孟容和俊錡已經在 2015/05/02 完成人生大事， \
\n但您仍然能在這知道一些婚禮細節。 \
\n從新郎新娘資訊可以得到我們的聯絡方式。 \
\n  "
	} 
	var greetings = g7_weds_mono + pre_greetings + "\
\n\n為了確保您能及時收到婚禮的相關資訊，\
\n請先輸入[[b;#859900;]apt-get install wedding] 指令安裝婚禮小幫手。\
\n安裝完成後即可輸入 [[b;#859900;]wedding] 指令查詢婚禮相關資訊。 \
\n使用中有任何問題您可輸入 [[b;#859900;]help] 指令得到協助。\
\n\
\n按下 [[b;#859900;]enter (↩)] 在終端機安裝婚禮小幫手.\
\n  ";

    function print_slowly(term, paragraph, callback) {
		var foo, i, lines;
		lines = paragraph.split("\n");
		term.pause();
		i = 0;
		foo = function(lines) {
			return setTimeout((function() {
				if (i < lines.length) {
					term.echo(lines[i]);
					i++;
					return foo(lines);
				} else {
					term.resume();
					return callback();
				}
			}), 1000);
		};
		return foo(lines);
    };

    function print_pictures(term, pictures, callback) {
		var foo, i;
		term.pause();
		i = 0;
		foo = function(pictures) {
			return setTimeout((function() {
				if (i < pictures.length) {
					term.echo(pictures[i]);
					i++;
					return foo(pictures);
				} else {
					term.resume();
					return callback();
				}
			}), 3000);
		};
		return foo(pictures);
    };

	function require_command(command_regex, terminal_history) {
		var executed = false;
		$.each(terminal_history, function(index, value){
			if (command_regex.test(value)) {
				executed = true
			}
		});
		return executed;      
    }

	var apt_get_install_regex = /apt-get install +wedding */ig;

    // Handle apt-get command
	function apt_get(inputs, term){
		// No second argument
		if (!inputs[1]) {
			term.echo(print_apt);
		} else if (inputs[1] === 'install' && !inputs[2]) {
			print_slowly(term, apt_get_install_empty , function(){
			});
		}else if (inputs[1] === 'install' && inputs[2] === 'wedding') {
			print_slowly(term, apt_get_install_message_pre, function(){
			});
		} else if (apt_get_command.indexOf(inputs[1]) != -1) {
			term.echo(apt_get_no_permission_post);
		} else {
			term.echo("E: 無效的操作 " + inputs[1])
		}
	}

    // Handle wedding command
    function wedding(inputs, term){
		if (!inputs[1]) {
			term.echo(wedding_help);
		} else if (inputs[1] === "bride") {
			term.echo(bride);
		} else if (inputs[1] === "groom") {
			term.echo(groom)
		} else if (inputs[1] === "invitation") {
			term.echo(invitation_post);
		} else if (inputs[1] === "location") {
			term.echo(reservation_address);
			term.echo(reservation_url);
			term.push(function(command, term) {
				if (/y(es){0,1}/.test(command)) {
					window.open(
						reservation_url,
						'_blank'
					);
				}
				term.pop();
			}, {
				prompt: '是否在新視窗開啟地圖連結？ (yes/no) ',
				greetings: null
			});
		} else if (inputs[1] == "gown") {
			print_pictures(term, pictures , function(){
			});
		}else {
			term.error(inputs + " : 查無指令")
		}
	}

    // Main interpreter function
	function interpreter(input, term) {
		var command, inputs;
		inputs = input.split(/ +/)
		command = inputs[0];
		if (command === "apt-get") {
			apt_get(inputs, term);
		} else if (command === "wedding" || command === "help") {
			window.terminal = term;
			if (require_command(apt_get_install_regex, term.history().data())) {
				wedding(inputs, term);
			} else {
				term.error('婚禮小幫手尚未安裝！\n請輸入 apt-get install wedding 指令安裝婚禮小幫手。');
			}
		} else if (/(cd)|(ls)|(cat)/.test(command)) {
			bash(inputs, term);
		} else if (/which +wedding/.test(input)) {
			if (require_command(gem_install_regex, term.history().data())) {
				term.echo("/usr/bin/wedding");
			} // else do nothing
		} else if (/whoami/.test(input)) {
			term.echo("root");
		} else if (command.length === 0) {
		// do nothing
		} else {
			term.error(command + ": 無此指令");
		}
	}

    // Handle bash commands
    function bash(inputs, term) {
		var argument, echo, insert;
		echo = term.echo;
		insert = term.insert;
		if (!inputs[1]) {
			return console.log("none");
		} else {
			argument = inputs[1];
			if (/^\.\./.test(argument)) {
				return echo("-bash: cd: " + argument + ": 拒絕不符權限的操作");
			} else {
				return echo("-bash: cd: " + argument + ": 沒有此一檔案或目錄");
			}
		}
	};

	$('#terminal').terminal( interpreter, {
		prompt: prompt,
		name: 'wedding',
		greetings: greetings,
		height: 600,
		onInit: function(term){
			term.insert("apt-get install wedding");
			term.history().clear();

		},
		completion: function(term, string, callback){
			callback(['apt-get install wedding',
				'wedding invitation',
				'wedding location',
				'wedding groom',
				'wedding bride',
				'wedding gown']);
		},
		tabcompletion: true
	});
});