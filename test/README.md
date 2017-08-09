# Simple visual testing

Loads only `core.scss` and individual component `.scss` files. **The HTML created here will be used on the documentation site.**

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
