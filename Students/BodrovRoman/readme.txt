см. https://webdevkin.ru/posts/raznoe/git-fork

fork на сайте https://github.com/Roman77B/R-prof-3-1405
появляется https://github.com/Roman77B/R-prof-3-1405
git clone https://github.com/Roman77B/R-prof-3-1405 -- это в локальный репозиторий делаем клон
git remote add upstream https://github.com/kellolo/R-prof-3-1405 -- добавляем удаленный репозиторий учителя и называем его upstream
git pull --rebase upstream master -- обновляем локальный репозиторий
git checkout -b studentBodrov -- создаю свою ветку
git push origin studentBodrov -- буду пушить в свой fork https://github.com/Roman77B/R-prof-3-1405, 
а оттуда уже через github пытаться делать pull request в общий репозитарий