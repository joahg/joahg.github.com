# Learning To Use Git and GitHub - Part 2

*This is part 2 of the series **Learning To Use Git and GitHub**, part 1 can be read [here][1].*

Yesterday, we discussed the proper way to utilize the git VCS on your local computer, that is one approach, but the more popular approach would be to store your code on a service such as [GitHub][2], which will maintain all your code repositories for you, provide extra tools that are nice to have, and make your code accessible from anywhere. Like git, GitHub is not the only git repository storage site, there are others, such as [Bitbucket][3] that have their own ups and downs to them, but GitHub is by far the most popular. To push your local code to GitHub, all you have to do is

   1. Signup for GitHub
   2. Create a remote repository on GitHub
   3. \* Add your Public SSH Key to the repository in the "Deploy Keys" section of the repository's settings (Get your public SSH key either by running `cat ~/.ssh/id_rsa.pub` in your terminal, or by following [this guide to generating ssh keys][4])
   4. \* Run `git remote add repo_name repo_ssh_path` in your terminal
   5. \* Run `git push repo_name` while `cd`'d in your repo's directory

\* You can alternatively `clone` (make a local copy of a remote repo) the GitHub repo using `git clone https://github.com/your_user_name/repo_name.git`, then copy all the code from the old code directory into the new GitHub-cloned directory, then you can simply `git push` to add local changes to the remote repository.

After you have your repo stored remotely, you can update it after commits with the appropriate `git push` command.

Once you have all your code and commits stored on GitHub, you can use the GitHub GUI to view commit info, version comparisons, you can invite other coders to come and comment on your code, see graphs on commit stats, and much, much more.

When you (or a fellow coder) has made changes to a remote repo, you can sync your local repository to it by simply running `git pull`. A "Pull Request" is made when another user (that is unable to modify the remote repo) suggests changes to your code, and *requests* that you *pull* his changes. That pull request (if accepted) will be recorded in the commit history in the repository. Using the `pull` feature of git and GitHub is useful, but that is just the tip of the iceberg of the many, many different features available on the services. Tomorrow, those will be further outlined in the final installment of Learning To Use Git and GitHub

*To continue reading, read [Learning To Use Git and GitHub - Part 3][5]*

[1]:/#/posts/git-and-github-1
[2]:https://github.com
[3]:https://bitbucket.org
[4]:https://help.github.com/articles/generating-ssh-keys
[5]:/#/posts/git-and-github-3