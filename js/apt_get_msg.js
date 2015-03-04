	var apt_get_install_message_pre = "\
正在讀取套件清單... 完成\
\n正在重建相依關係\
\n正在讀取狀態資料... 完成\
\n升級 0 個，新安裝 1 個，移除 0 個，有 0 個未被升級。\
\n需要下載 556.6 kB 的套件檔。\
\n此操作完成之後，會多佔用 5,566 kB 的磁碟空間。\
\n下載:1 http://archive.ubuntu.com/ubuntu/ trusty/main wedding amd64 1.0.0 [556.6 kB]\
\n取得 556.6 kB in 1s (556.6 kB/s)\
\n選取了原先未選的套件 wedding:amd64。\
\n讀取資料庫 ... 目前共安裝了 5566 個檔案和目錄。\
\n準備解開 .../wedding_1.0.0_amd64.deb ...\
\n解開 wedding:amd64 (1.0.0) 中 ...\
\n設定 wedding:amd64 (1.0.0) ...\
";

	var apt_get_install_empty = "\
正在讀取套件清單... 完成\
\n正在重建相依關係\
\n正在讀取狀態資料... 完成\
\n升級 0 個，新安裝 0 個，移除 0 個，有 0 個未被升級\
";

	var apt_get_no_permission_post = "\
\nE: 無法開啟鎖定檔 /var/lib/apt/lists/lock - open (13: 拒絕不符權限的操作)\
\nE: 無法鎖定 /var/lib/apt/lists/ 目錄\
\nE: 無法開啟鎖定檔 /var/lib/dpkg/lock - open (13: 拒絕不符權限的操作)\
\nE: Unable to lock the administration directory (/var/lib/dpkg/), are you root?\
";

	var print_apt = '\
\napt 1.0.1ubuntu2 是用於 amd64 並在 Oct 28 2014 20:55:14 上編譯的\
\n用法: apt-get [選項] 指令\
\n		apt-get [選項] install|remove 套件1 [套件2 ...]\
\n		apt-get [選項] source 套件1 [套件2 ...]\
\n\
\napt-get 是下載及安裝套件的簡易指令列介面。最常用指令為 update\
\n及 install。\
\
\n指令:\
\n		update - 取得新套件清單\
\n		upgrade - 進行升級\
\n		install - 安裝新套件 (「套件」為 libc6 而非 libc6.deb)\
\n		remove - 移除套件\
\n		autoremove - 自動移除所有無用套件\
\n		purge - 移除套件及設定檔\
\n		source - 下載源碼檔\
\n		build-dep - Configure build-dependencies for source packages\
\n		dist-upgrade - 發行版升級，見 apt-get(8)\
\n		dselect-upgrade - Follow dselect selections\
\n		clean - 清除已下載套件檔\
\n		autoclean - 清除已下載舊套件檔\
\n		check - Verify that there are no broken dependencies\
\n		changelog - 下載並顯示該套件的變更紀錄\
\n		download - 將二進檔下載至當前目錄\
\n\
\n	選項:\
\n		-h  本求助文字.\
\n		-q  Loggable output - no progress indicator\
\n		-qq No output except for errors\
\n		-d  只下載 - 下安裝或解開套件檔\
\n		-s  No-act. Perform ordering simulation\
\n		-y  Assume Yes to all queries and do not prompt\
\n		-f  Attempt to correct a system with broken dependencies in place\
\n		-m  Attempt to continue if archives are unlocatable\
\n		-u  Show a list of upgraded packages as well\
\n		-b  取得源碼套件後編譯\
\n		-V  顯示詳細版本號\
\n		-c=? 讀取此設定檔案\
\n		-o=? 設定任意設定選項，如 -o dir::cache=/tmp\
\n		更多資料及選項見 apt-get(8)、sources.list(5) 及 apt.conf(5) manual\
\n		page\
\n	                   This APT has Super Cow Powers.\
	';