# react-native-boiler23

## IMPORTANT:

We use `husky` as a tool to run the linter and unit testing when commiting and pushing new changes. In order to get it working you need to install it firt by running:
```bash
yarn run prepare:husky
```

This has to be run just once.

### We have added a `pre-commit` and `pre-push` hooks, so linter and test are run before pushing the code to the remote. If for some reason you don't want these processes to be run, add the flag ` --no-verify`, for example:

```bash
# commit
git commit --no-verify -m "commit message"
# push
git push --no-verify
```

