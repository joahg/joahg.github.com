# Learning To Use Git and GitHub - Part 3

*This is part 3 of the series **Learning To Use Git and GitHub**, if you haven't read them already, here are [part 1][1] and [part 2][2]*

Some more useful tools of git and GitHub are branching and merging. Branching is used when you want to deviate from your current code and try out a new method you've learned while saving the old version in a separate branch. By default, all code in git and GitHub repositories is stored in the `master` branch, which can be observed by running `git branch` while in the repo. To create a new branch, and switch to it locally, you can run `git checkout -b new_branch_name`. New branches are empty by default, so when you create a new branch, it replaces the visible file tree with an empty branch for you to populate. To switch branches, simply use `git checkout branchname` (notice the absense of the `-b` flag, which is only used while *creating* a new branch). When you would like to combine two branches so as to have "The best of both worlds", you can use `git merge branchname`, which merges all the commits from `branchname` into the current branch you are in.

If, before you commit your latest changes, you would like to see what has changed since your last commit from your command line, you can do so by using `git diff`. That will list out all the changes line-by-line that have been made since the last commit recorded.

There is always the time that you are working on your code, but you hit a roadblock, and no matter what you do, you can't move forward or backward in trying to fix it. `git reset` allows you to reset all the code you have locally to the last commit recorded. If you would like to roll all your code back to a specific commit, you can run `git log`, which has all the commits in the current branch and their SHAs, which you can use to revert to a specific commit by using `git reset commit_sha`. Sometimes, it is best to use a `--hard` reset, which has the same effect as deleting the repo locally and re-cloning it from the remote host, erasing any trace of anything you did that made you mess up. A hard reset is done with `git reset [optional commit_sha] --hard`.

The `.gitignore` file in a repo is one of the most useful simple tools that git has. Stated simply enough, any file paths listed out in `.gitignore` are ignored in any `git` actions (except for `reset`s). This is useful, for example, if you are working in Mac OS X, the system by default puts a `.DS_Store` file in your repo directory, but this can become annoying, and you may just want to be able to forget about it. If you add the line "`.DS_Store`" to `.gitignore`, git will from then on ignore the file, and you won't need to worry about it getting in your commits any more.

The git command line interface, *is*, frankly, the most useful, versatile way to make the most use out of the git VCS, but if you choose to use GitHub as a partner to that, you may wish to use the GitHub Desktop App ([Mac][3]|[Windows][4]), which provides a desktop GUI for managing local and remote repositories and their branches, and allows for an easier way to quickly view all that has changed since the last commit.

One extremely popular feature on GitHub is [GitHub Pages][5], which allows project website hosting for free under a github.io subdomain. This can be accomplished by creating a "gh-pages" branch on your repo (`git checkout -b gh-pages`), and putting any (static) pages (or other files) you would like to have published in that branch. Your project page can be accessed by navigating to https://your-user-name.github.io/repo-name.

Making use of a VCS, even on the smallest, most seemingly insignificant level, can, and most likely will, save you a lot of heartache down the road. Git is a wonderful tool if used properly, and with a knowledge of its capabilities. GitHub is an awesome partner to git, as long as you know how to do what you need to do. More info about git can be found at [git's official documentation][6], and you can find more about GitHub in [GitHub's Help and Support Center][7].



[1]:/#/posts/git-and-github-1
[2]:/#/posts/git-and-github-2
[3]:http://mac.github.com
[4]:http://windows.github.com
[5]:http://pages.github.com
[6]:http://git-scm.com/documentation
[7]:https://help.github.com