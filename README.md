# Data Options Toolbox Web Component [![CircleCI](https://circleci.com/gh/Rise-Vision/rise-data-options/tree/master.svg?style=svg)](https://circleci.com/gh/Rise-Vision/rise-data-options/tree/master)

## Introduction

`rise-data-options` is a Polymer 3 Web Component that provides a selection of fixed
text values from which a user can choose. These values can represent languages,
style names, or other arbitrary values that can be used to change the behavior
of a template.

## Usage

The below illustrates simple usage of the component.

#### Example

```
  <rise-data-options
    id="rise-data-options-01"
    options="english,spanish,french"
    value="english"
  >
  </rise-data-options>
```

This is not a visual component, so an event listener should be registered to
process the data it provides. You can check the available events in the [events section](#events)

### Labels

The component may define a 'label' attribute that defines the text that will appear for this instance in the template editor.

This attribute holds a literal value, for example:

```
  <rise-data-options
    id="rise-data-options-01"
    label="Languages"
    options="english,spanish,french"
    value="english"
  >
  </rise-data-options>
```

If it's not set, the label for the component defaults to "Options", which is applied via the [generate_blueprint.js](https://github.com/Rise-Vision/html-template-library/blob/master/generate_blueprint.js) file for a HTML Template build/deployment.

### Attributes

This component receives the following list of attributes:

- **id**: ( string ): Unique HTMLElement id.
- **value**: ( string / required ): The default value, that be one of those listed under *options* attribute.
- **label**: ( string / optional ): An optional label key for the text that will appear in the template editor. See 'Labels' section above.
- **options**: ( string / required ): A comma separated string with the supported values. Attribute editor UX will be generated with these.

This component does not support PUD.

### Events

The component sends the following events:

- **_configured_**: The component has initialized what it requires to and is ready to handle a _start_ event.
- **_data-update_**: Event is sent when text value changes. Here is an example of event consumption:
```
  element.addEventListener('data-update', function (event) {
    console.log(event.type); // prints 'data-update'
    console.log(event.detail.value); // prints new option value.
  });
```

### Logging

The component is a very simple one, and logs no events to BQ.

## Built With
- [Polymer 3](https://www.polymer-project.org/)
- [Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli)
- [WebComponents Polyfill](https://www.webcomponents.org/polyfills/)
- [npm](https://www.npmjs.org)

## Development

### Local Development Build
Clone this repo and change into this project directory.

Execute the following commands in Terminal:

```
npm install
npm install -g polymer-cli@1.9.7
npm run build
```

**Note**: If EPERM errors occur then install polymer-cli using the `--unsafe-perm` flag ( `npm install -g polymer-cli --unsafe-perm` ) and/or using sudo.

### Testing
You can run the suite of tests either by command terminal or interactive via Chrome browser.

#### Command Terminal
Execute the following command in Terminal to run tests:

```
npm run test
```

#### Local Server
Run the following command in Terminal: `polymer serve`.

Now in your browser, navigate to:

```
http://127.0.0.1:8081/components/rise-data-options/demo/src/rise-data-options.html
```

### Demo project

A demo project showing how to implement a simple rise-data-options listener can be found in the `demo` folder.

### Integration in a Template

After creating the Template's structure in `html-template-library`, add a reference to the component in the `<head>` section of `template.html`:

```
<script src="https://widgets.risevision.com/stable/components/rise-data-options/1/rise-data-options.js"></script>
```

Add an instance of the component, as shown in the example:

```
  <rise-data-options
    id="rise-data-options-01"
    label="Languages"
    options="english,spanish,french"
    value="english"
  >
  </rise-data-options>
```

Interaction with the component using the JavaScript browser console is possible
by manually running code like:

```
const dataOptions01 = document.getElementById( 'rise-data-options-01' );

dataOptions01.setAttribute( 'value', 'spanish' ); // or 'french', or 'english'
```

## Submitting Issues
If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. When reporting issues, please use the following format where applicable:

**Reproduction Steps**

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

**Expected Results**

What you expected to happen.

**Actual Results**

What actually happened. (screenshots / video captures always help)

## Contributing
All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas, please post your thoughts to our [community](https://help.risevision.com/hc/en-us/community/topics), otherwise submit a pull request and we will do our best to incorporate it. Please be sure to submit test cases with your code changes where appropriate.

## Resources
If you have any questions or problems, please don't hesitate to join our lively and responsive [community](https://help.risevision.com/hc/en-us/community/topics).

If you are looking for help with Rise Vision, please see [Help Center](https://help.risevision.com/hc/en-us).

**Facilitator**

[Santiago Arriaga Noguez](https://github.com/santiagonoguez "Santiago Arriaga Noguez")
