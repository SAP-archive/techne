# Simple visual testing

This simple framework loads only `core.scss` and individual component `.scss` files. **The HTML created here will be used on the documentation site.**

- Run `npm test`
- Go to [localhost:3030](http://localhost:3030)

To get started add a new directory matching the component block with an `index.njk` file inside.

```
templates/
    card/
        index.njk
```

The index file should minimally contain the following template:

```
{% extends "layout.njk" %}
{% block content %}

    //HTML goes here

{% endblock %}
```

Then view component at `localhost:3030/BLOCK_NAME`, e.g., [localhost:3030/card](http://localhost:3030/card).

Additionally, create a macro and generate the HTML based on a data object.

👍

# How to test a feature branch
If you need to visually test a component, follow these simple steps.

### First time setting up?
If you have never setup the project, you need to do a few things first.

**Using macOS**
- Install node from https://nodejs.org/en/
- Install the [Github desktop application](https://desktop.github.com)
- Choose "Clone a repository" and input URL `https://github.com/SAP/techne.git`
- Change "Current Branch" to `v2.0`
- From the macOS menu bar, select "Repository > Open in Terminal"
- Type `npm install`

You now have all the dependencies you need to run the project.

### To test a feature branch
- In Github application, change "Current Branch" to the feature branch you are testing, e.g., `feature/999`
- From the macOS menu bar, select "Repository > Open in Terminal"
- Type `npm test`
- Go to [localhost:3030](http://localhost:3030) to find the components you are testing
