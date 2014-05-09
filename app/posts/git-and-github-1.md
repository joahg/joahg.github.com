# Learning To Use Git and GitHub - Part 1

A Version Control System (VCS) is a tool used by coders around the world to keep track of their code and the changes they have made to it. A VCS will save a snapshot each time you check your code into the VCS, allowing you to go back to any revision along the way and restore your code to the way it was then. 

**Every programmer should use a VCS.**

Here's why: Have you ever made change to your code, but just after you saved the file, you realized that you made a horrible mistake and you need to go back? A VCS allows you to quickly jump back to before you made the mistake. Have you ever wanted to be able to prove (or disprove) that one particular line of code is breaking your project? A VCS allows you to see multiple revisions of your code to enable you to do just that. Have you ever wanted to try out a new innovative feature in your project without accidentally messing up the project altogether? A VCS allows you to create parallel deviations to your code which can later be merged into the final project.

Although not alone with alternatives such as [SVN][1] or [Mercurial][2], [Git][3] is by far the most popular VCS available. 
Get started with git by downloading the appropriate package from [Git's Download Page][4] for your OS. Git installs by default as a command-line tool, so follow the appropriate instructions to access the git command line for your OS (in Mac and Linux, simply go to the Terminal). From there, all you need to do is `cd` into the directory your code is stored in, and `git init`. That will initiate a versioned git repository in the current directory you are in.

When you are ready to add a new revision to the git repository's records, simply (while `cd`'d into the git repository) `git add` what you want to add to this specific revision. For example, if your folder was like this:

    - Code # <== this is a git repo
    |- index.html
    |- js
     |- script.js
    |- css
     |- style.css
    |- img
    |- .git # <== this is a hidden directory, but exists if {Code} is a git repo

And you just wanted to add the changes in /js to your current revision, simply use `git add js`, or if you wanted to just add the style.css file, you would use `git add css/style.css`. 

Git uses the term "commit" for the different versions recorded to connote that you are "committing" the current code to the pretty-much-permanent record held by the git repo. Once you have `git add`'d the files you want to be a part of your next commit, simply use `git commit -m "Your Commit Message Here"`. Git highly recommends that you include a commit message as a part of your commit, so that you, and anyone else looking at your code, can easily recognize what the current version of the code does. One less-known trick that you can use while using the git command line is that you can use `git commit -m "" --allow-empty-message`, and bypass having to supply a message with your commit.

By following the above instructions, all your code and commits associated with it will be stored locally on your computer. This is perfectly acceptable, but tomorrow we will be discussing the more popular approach; storing your code online with a service such as [GitHub][5].

*To continue reading, read [Learning To Use Git and GitHub - Part 2][6]*

[1]:http://subversion.tigris.org
[2]:http://mercurial.selenic.com
[3]:http://git-scm.com
[4]:http://git-scm.com/downloads
[5]:https://github.com
[6]:/#/posts/git-and-github-2