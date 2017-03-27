
Assumptions:
- Developers are using bower to get Techne package and dependencies.
@bower-path: '../../..';
@bootstrap-path: '/public/js/vendor/bootstrap'; // Path to bootstrap folder
@hytech-path: '/public/js/vendor/hyTechne/dist/techne'; // Path to hytech folder

- Developers are importing the styles.less as a vendor framework into the project's master CSS file. 
@import "../main/webapp/public/js/vendor/hyTechne/src/less/styles";

- Developers use Techne and Bootstrap variables in the project CSS
builder/src/less/theme/components/navbar-footer.less
Line 33: background: @global-feedback-affix-background-default;
Defined in builder/src/main/webapp/public/js/vendor/hyTechne/src/less/globals/themes/_techne.less

- Project CSS accounts for additional components and other special needs
@import "theme/components/password";
@import "theme/components/dropdown-button";
@import "theme/components/lists";

Custom CSS in builder/src/less/theme/components/navbar-footer.less
At line 33: background: @global-feedback-affix-background-default;
Defined in builder/src/main/webapp/public/js/vendor/hyTechne/src/less/globals/themes/_techne.less

Use case: Developer wants to use Techne as their baseline design system.
Use case: 


# Source





# Output

## Package

```
/dist
	/css
		techne-all.css
		techne-all.min.css
		techne-core.css
		techne-core.min.css
		/core
		techne-layout.css
		techne-layout.min.css
		/layout	
		techne-components.css
		techne-components.min.css
		/components
	/v0.0.0
		/...
```


## Documentation

```
/www
	index.html
	getting-started.html
	components.html
	guidelines.html
	/img
		...
	/svg
		...
	/css
		...
	/js
		...
	...

```