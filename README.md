# Set up 
initialize git
    
    git init

make first commit

    git add .
    git commit -m "message"

# Create github repo
Add repo as remote and push it to main

    git remote add origin <repo-url>
    git branch -M main
    git push -u origin main

# Create feature branch

    git branch -b <branchname>

Then to commit changes to the branch

    git add <files or .>
    git commit -m "message"
    git push --set-upstream origin <branch name> // if first commit
    git push // if you have already commited

GitHub can be utalized to create pull requests
