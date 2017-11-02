# 4.0.0 (2017-11-02)

## WARNING: THIS REVERTS EMBER CLI 2.16.1 BACK TO 2.12.3

We apologize for this change. Unfortunately, due to the internal needs of our organization this became a required action.


# 3.0.0 (2017-11-02)

## WARNING: THIS REVERTS EMBER CLI 2.16.1 BACK TO 2.12.3

We apologize for this change. Unfortunately, due to the internal needs of our organization this became a required action.

The 2.16.1 changes are now located in the `ember-cli-2.16.1` branch and will hopefully be contained in a versioned release again in the future.


# 2.0.1 (2017-10-10)
* **Upgraded** to Ember CLI 2.16.1

# 2.0.0 (2017-09-28)
* **Updated** to Ember CLI 2.15.1
* **Updated** blueprints to Ember Javascript Modules API (https://github.com/emberjs/rfcs/blob/master/text/0176-javascript-module-api.md)

# 1.2.1 (2017-08-01)
* **Updated** to Ember CLI 2.12.3 in previous PR: https://github.com/ciena-frost/ember-cli-frost-blueprints/pull/13
* **Updated** travis CI publish build to use pr-bumper version 2


# 1.2.0 (2017-06-02)
 * **Added** `--pro` option to `ember g component` blueprint, which skips the explanatory comments and sample computed property
 * **Added** `--route` option to `ember g component` and `ember g component-test` which will generate a component nested under a route (for use with `ember-local-resolver`). 


# 1.1.0 (2017-06-02)

* **Added** a `util-test` blueprint to make a more frosty unit test for a utility module.
* **Fixed** the path for a generated `util` to `utils` instead of `util` (matching `ember-cli-legacy-blueprints`) 

# 1.0.0 (2017-05-26)

* **Added** `acceptance-test` blueprint (resolves [#7](https://github.com/ciena-frost/ember-cli-frost-blueprints/issues/7))


# 0.1.0 (2017-05-26)
* **Added** the `*-test` blueprints from `ember-frost-test`
* **Added** the blueprints from `ember-frost-core`
* **Added** automated tests to run the blueprints and lint the generated files. 

