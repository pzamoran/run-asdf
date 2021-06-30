# run-asdf

Sets path to use automatically asdf wrapper. This wrapper enables the use of cached software on the runner.

You only need to provide:
- A .tool-version file on your repository and you could use software version showed in the file. 
- ASDF installed on your agent inside the agent-home/<xxx> path.


## Usage

```
# in your job:
name: MY GREAT JOB
on:
  push:
    branches:
      - '*'
jobs:
  run-asdf
    name: 
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - uses: pzamoran/run-asdf@v0.0.2
    - name: Show asdf packages:
      run: |
        asdf info
        asdf plugin list all
        asdf current

```
## Hacking

After you've made changes, you must run `npm run build` and commit the
`dist/index.js`, if you forgive it, when the PR to master is merged, automatically the code is compiled and commited to the repo.

## License

Apache-2.0

[ref-asdf]: https://github.com/asdf-vm/asdf
