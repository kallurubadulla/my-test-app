# REPO_URL https://github.com/kallurubadulla/my-test-app
npx create-react-app my-test-app
cd my-test-app
git commit -m "initial commit"
git checkout -b update_logo
# (Edited src/App.js with new logo and link)
git add .
git commit -m "Replace logo and link for task"
git push origin update_logo
gh pr create --base master --head update_logo --title "Update Logo Task" --body "Replaced logo and link"
gh pr merge --merge