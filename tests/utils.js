/**
 * Helper to make it easy to validate ember-cli blueprint file generators
 */

/* global afterEach, beforeEach, describe, it */
const chai = require('chai')
const chalk = require('chalk')
const exec = require('child_process').exec

const expect = chai.expect

/**
 * Verify that a blueprint generates correctly
 * @param {String} name - the name of the blueprint
 * @param {String[]} argumentList - the actual ember generate command arguments
 * @param {String[]} [filesToSkip=[]] - filenames to skip linting (b/c we're not generating them ourselves yet)
 */
function itShouldGenerateCorrectly (name, argumentList, filesToSkip) {
  filesToSkip = filesToSkip || []
  describe(name, function () {
    this.timeout(5000)
    argumentList.forEach((args) => {
      const fullCmd = `ember g ${name} ${args}`
      describe(fullCmd, function () {
        const createPattern = '  create '
        let error, filenames
        beforeEach(function (done) {
          error = null
          exec(fullCmd, function (err, stdout) {
            filenames = []
            stdout.split('\n').forEach((line) => {
              if (line.indexOf(createPattern) !== -1) {
                filenames.push(line.replace(createPattern, ''))
              }
            })
            error = err
            done()
          })
        })

        afterEach(function (done) {
          exec(`ember d ${name} ${args}`, function () {
            done()
          })
        })

        it('should not error', function () {
          expect(error, error ? error.cause : '').to.equal(null)
        })

        describe('the generated file(s)', function () {
          let failed
          beforeEach(function (done) {
            error = ''
            failed = false
            let totalNeeded = filenames.length
            let totalComplete = 0
            filenames.forEach((filename) => {
              if (filesToSkip.includes(filename)) {
                totalComplete++
                console.log(chalk.yellow('         ✗ ') + filename)
              } else {
                const extension = filename.split('.').reverse()[0]
                if (extension === 'js') {
                  exec(`./node_modules/.bin/lint-javascript ${filename}`, function (err, stdout, stderr) {
                    const result = (err ? chalk.red('✗') : chalk.green('✓'))
                    console.log(`         ${result} ${filename}`)
                    if (err) {
                      failed = true
                      console.error(chalk.red(stdout))
                    }

                    totalComplete++
                    if (totalComplete === totalNeeded) {
                      done()
                    }
                  })
                }

                if (extension === 'hbs') {
                  exec(`./node_modules/.bin/lint-htmlbars ${filename}`, function (err, stdout, stderr) {
                    const result = (err ? chalk.red('✗') : chalk.green('✓'))
                    console.log(`         ${result} ${filename}`)
                    if (err) {
                      failed = true
                      console.error(chalk.red(stdout))
                    }

                    totalComplete++
                    if (totalComplete === totalNeeded) {
                      done()
                    }
                  })
                }
              }
            })
          })

          it('should pass lint', function () {
            expect(failed).to.equal(false)
          })
        })
      })
    })
  })
}

module.exports = {
  itShouldGenerateCorrectly
}
