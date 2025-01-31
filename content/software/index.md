---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Software"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2022-10-16T11:28:13+01:00
lastmod: 2022-10-16T11:28:13+01:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []

output:
  blogdown::html_page:
    toc: true
    toc_depth: 2
---

# Software development

I have developed and contributed to many software projects, with a focus on reproducible research, geocomputation, modelling and visualisation.
All of them support evidence based decision-making, especially in relation to sustainable transport.

The links below provide more details on popular R packages I have developed (Andrea Gilardi now leads the {osmextract} package).

| [![](https://docs.ropensci.org/stplanr/reference/figures/stplanr.png)](https://docs.ropensci.org/stplanr/)|  [![](https://raw.githubusercontent.com/ropensci/stats19/master/man/figures/logo.png)](https://docs.ropensci.org/stats19/) | [![](https://user-images.githubusercontent.com/1825120/200123605-1349adbe-41a0-4fd0-a23e-99b62b4f75ae.png)](https://docs.ropensci.org/osmextract/) |
|--:|--:|--:|

I also contribute to a number of popular open source projects.
See my [GitHub profile](https://github.com/robinlovelace/) for details.

# Recommended software

Scientific methods, and the truths they reveal, depend on transparency, collaboration and falsifiability.
Translated into the 21^st^ Century and field of data science, this means using software that is open source (and therefore transparent), accessible and community-led (and therefore collaborative), and conducive to reproducible research (and therefore falsifiable).

Reproducible research based on open source software means that data scientists and researchers operating in the public domain gain trust not by relying on arguments of authority^[
Ever heard someone say "trust me, I'm a data scientist"? If so, you can quickly check their credentials by looking at their history of publishing open and reproduicble scripts, and open source tools.
] 
but by producing code that other people can run to verify their outputs.
Researchers who are unable to show their workings are less well-trusted, resulting in virtuous feedback loops through communities of practice that encourage sharing and collaboration.

Software is not just a static 'tool of the trade'.
It is lanuage --- or rather multiple languages --- in which society encodes its digital capabilities, rules, and aspirations.
Software if vital for humanity in the 21^st^ Century.
This realisation informs the software I use and develop.
I hope you will take a look at and maybe even install a few of the open source tools I recommend below.

Most of the software projects listed on this page are free and open source.

## Operating system: Linux

The operating system (OS) is the foundation on which all other programs that can (or cannot) run on your computer build.
Many open source software projects are *platform agnostic*, meaning they work on all major operating systems.
However, having the most appropriate OS for your needs installed is important for getting work done: poor choice of OS can lead to hours wasted setting things up and delays on new software being accessible.

Windows and Mac have a near [duopoly](https://en.wikipedia.org/wiki/Duopoly) over mainstream consumer laptop and desktop operating system markets.
However, Linux forms the basis of the operating systems of choice for most serious software developers and many data scientists.
I strongly recommend installing a Linux on at least one laptop or desktop that you have available if you have not done so already: it can be life changing.

### Ubuntu

I use and recommend [Ubuntu](https://ubuntu.com/), an operating system built on Linux with a focus on user friendliness and mainstream adoption.
Developed by the multinational company [Canonical](https://en.wikipedia.org/wiki/Canonical_(company)), Ubuntu is a popular Linux distribution ('[distro](https://distrowatch.com/)'), that you can install on most consumer desktops and laptops.

I also recommend [itsfoss.com's article on Linux distros for beginners](https://itsfoss.com/best-linux-beginners/) if you're getting started in this space.

## Interactive development environments

### RStudio

### VSCode

## AppImageLauncher

AppImage is a system for packaging applications that allows them to run, out of the box, on any Linux distro.
[AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) is a user friendly tool for managing AppImages.

[Install](https://github.com/TheAssassin/AppImageLauncher/wiki) it with the following commands on [Ubuntu](https://github.com/TheAssassin/AppImageLauncher/wiki/Install-on-Ubuntu-or-Debian):

```bash
sudo apt install software-properties-common
sudo add-apt-repository ppa:appimagelauncher-team/stable
sudo apt update
sudo apt install appimagelauncher
```

## Note taking and task management

### LogSeq

[LogSeq](https://logseq.com/) has seen explosive growth since it was first launched in 2020.
For me it has replaced about 3 other tools that I was using previously, functioning as:

- A todo list manager. Previously I was using TaskWarrior and TimeWarrior.
- A note taking app. I had tried a number of tools for this, including the excellent cross-platform [Joplin](https://joplinapp.org/).
- A diary. Previously I was using various tools including RedNotebook.

Having all you notes and TODO items in one place is very handy, especially when you can sync your notes between computers using SyncThing.
Download the latest version of LogSeq in file format of your choice (I used the AppImage version) from [github.com/logseq](https://github.com/logseq/logseq/releases).

## File sharing

### Syncthing

 [Syncthing](https://apt.syncthing.net/) is a decentralised file sharing system that enables you to share folders between 2 or more devices.
 It does this efficiently and with minimal hassle on many devices.
 Its support for [Android](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid&hl=en_GB&gl=US) on the Google Play Store makes it ideal for syncing things between laptop and mobile.
 
 [Install it on Ubuntu/Debian](https://apt.syncthing.net/) systems with the following commands:
 
 ```bash
sudo curl -o /usr/share/keyrings/syncthing-archive-keyring.gpg https://syncthing.net/release-key.gpg

# Add the "stable" channel to your APT sources:
echo "deb [signed-by=/usr/share/keyrings/syncthing-archive-keyring.gpg] https://apt.syncthing.net/ syncthing stable" | sudo tee /etc/apt/sources.list.d/syncthing.list

# Add the "candidate" channel to your APT sources:
echo "deb [signed-by=/usr/share/keyrings/syncthing-archive-keyring.gpg] https://apt.syncthing.net/ syncthing candidate" | sudo tee /etc/apt/sources.list.d/syncthing.list

# Update and install syncthing:
sudo apt-get update
sudo apt-get install syncthing
```





