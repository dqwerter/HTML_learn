#!/bin/bash
# echo "Set Shell Proxy"
# export all_proxy=socks5://127.0.0.1:1080

# /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# brew installing
echo "brew cask installing"
brew update && brew upgrade

brew cask install shadowsocksx-ng
brew cask install google-chrome
brew cask install iina
brew cask install ccleaner
brew cask install keka
brew cask install mounty

brew search iterm2
brew cask install intellij-idea
brew cask install pycharm
brew cask install webstorm
brew cask install clion
brew cask install cyberduck

# brew cleanup
echo "runing brew cleanup..."
brew cleanup

echo "Complete."

