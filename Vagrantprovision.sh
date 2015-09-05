#!/bin/bash

# Add vagrant user to admin group

sudo usermod -a -G admin vagrant 

# Variables

HOME=/home/vagrant

# Git

sudo apt-get -y install git

# TODO: user should set its git config settings

GIT_USERNAME='Vacheslav Starikov'
GIT_EMAIL='slavicstar@fastmail.com'
GIT_COREEDITOR='vim'
GIT_MERGETOOL='vimdiff'
git config --global user.name "$GIT_USERNAME"
git config --global user.email "$GIT_EMAIL"
git config --global core.editor "$GIT_COREEDITOR"
git config --global merge.tool "$GIT_MERGETOOL"

# Go home

cd $HOME

# My configs

git clone https://github.com/starikovs/conf.git Conf
ln -s Conf/vimrc .vimrc
ln -s Conf/dircolors .dircolors
mv .bashrc .bashrc_
ln -s Conf/bashrc .bashrc

# Vim

sudo apt-get -y install vim
git clone https://github.com/gmarik/Vundle.vim.git .vim/bundle/vundle
#vim +PluginInstall +qall

# Nodejs (npm included)

curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs

# Update npm

sudo npm install -g npm

