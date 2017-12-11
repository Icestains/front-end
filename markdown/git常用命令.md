克隆项目：git clone https://github.com/username/repositityname.git

更换仓库地址：git remote set-url origin https://xxxx/xxx.git

设置贡献者：
git config --global user.name "username"
git config --global user.email email

查看设置：
git config --global user.name
git config –list

查看状态：git status

添加到缓存区：
单个文件  		git add 1.html
所有改变的文件	git add .

提交到库（版本区）
git commit
git commit -m "change 1.html agian"
git commit -a -m "change 1.html agian"

查看修改日志：git log

对比：
工作区与缓存区：git diff
缓存区与库：	git diff --cached(--staged)
工作区与库：	git diff master

撤销：
从缓存区撤回工作区：	git reset HEAD drag.js
同步库里的版本到工作区	git checkout -- drag.js
撤销上一次版本区的提交跟这次合并成一次提交：git commit -m "amend test 2" –-amend



删除：
删除缓存区（工作区已被删除的情况下）：	git rm gitTest.txt
删除工作区和缓存区：					git rm -f gitTest.txt
删除缓存区（工作区没被删除的情况下）：	git rm --cached test.txt

恢复：
恢复指定版本的某个文件：	git checkout 641299 1.html
恢复指定版本：				git reset --hard 4bcbf6af
头指针移动一个的版本：		git reset --hard HEAD^
头指针移动多个的版本：		git reset --hard HEAD~2
查看修改日志：				git reflog


同步到远程仓库：
查看远程仓库名：	git remote
git remote –v
推送到远程仓库：	git push origin master


多人协作解决冲突：
解决冲突：	git fetch
git diff master origin/master
git merge origin/master master
直接拉取过来并合并：git pull origin master

开源项目协作：
fork
pull request

Git分支：
查看所有分支：				git branch
查看已合并的分支：			git branch –merged
查看未合并的分支：			git branch --no-merged
创建一个名为new1的分支：	git branch new1
切换到new1分支上：			git checkout new1
创建并切换到new2分支上：	git checkout -b new2
合并new1分支（在master上）：git merge new1
删除new1分支：				git branch -d new1
强制删除new1分区：			git branch -D new1

Github分支与标签：
将分支推送到远端仓库：	git push origin new1
查看标签名：			git tag
起一个标签名：			git tag v1.0
将版本推送到远端仓库：	git push origin v1.0
