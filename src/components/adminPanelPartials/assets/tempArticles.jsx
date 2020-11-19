const TempArticles = [
  {
    key: "1",
	categoryId: "1",
    title: "Advanced CSS Theming with Custom Properties and JavaScript",
	content: "Throughout this tutorial on CSS theming, we’ll be using CSS custom properties (also known as CSS variables) to implement dynamic themes for a simple HTML page. We’ll create dark and light example themes, then write JavaScript to switch between the two when the user clicks a button. Just like in typical programming languages, variables are used to hold or store values. In CSS, they’re typically used to store colors, font names, font sizes, length units, etc. They can then be referenced and reused in multiple places in the stylesheet. Most developers refer to “CSS variables”, but the official name is custom properties. CSS custom properties make it possible to modify variables that can be referenced throughout the stylesheet. Previously, this was only possible with CSS preprocessors such as Sass."
  },
  {
    key: "2",
	categoryId: "1",
    title: "How to Use Gulp.js to Automate Your CSS Tasks",
	content: "In this article, we look at how you can use Gulp.js to automate a range of repetitive CSS development tasks to speed up your workflow. Web development requires little more than a text editor. However, you’ll quickly become frustrated with repetitive tasks that are essential for a modern website and fast performance, such as: converting or transpiling, concatenating files, minifying production code, deploying updates to development, staging and live production servers. Some tasks must be repeated every time you make a change. The most infallible developer will forget to optimize an image or two and pre-production tasks become increasingly arduous. Fortunately, computers never complain about mind-numbing work. This article demonstrates how use Gulp.js to automate CSS tasks"
  },
  {
    key: "3",
	categoryId: "1",
    title: "Progressively Enhanced CSS Layouts: Floats to Flexbox & Grid",
	content: "It can be difficult to achieve complex yet flexible and responsive grid layouts. Various techniques have evolved over the years but most, such as faux columns, were hacks rather than robust design options. Most of these hacks were built on top of the CSS float property. When the Flexbox layout module was introduced to the list of display property options, a new world of options became possible. Now you can not only define the direction the container is going to stack the items but also wrap, align (items and lines), order, shrink, etc. them in a container. With all that power in their hands, developers started to create their own combinations of rules for all sorts of layouts. Flexibility reigned. However, Flexbox was designed to deal with one-dimensional layouts: either a row or a column. CSS Grid Layout, in contrast, permitted two-dimensional row and column layouts."
  },
  {
    key: "4",
	categoryId: "2",
    title: "Progressive Enhancement vs Graceful Degradation",
	content: "It’s difficult to create a website that supports every user’s browser. Two options are commonly used — “graceful degradation” and “progressive enhancement”. Graceful degradation ensures a website continues to function even when something breaks. For example, float: right may fail if an element is too big for the screen but it wraps to the next empty space so the block remains usable. Progressive enhancement takes the opposite approach. The page starts with minimum functionality and features are added when they’re supported. The example above could use a CSS media query to verify the screen is a minimum width before allowing an element to float. When it comes to grid layouts, each browser determines the appearance of its components. In this article, you’re going to understand with some real samples how to evolve some web contents from an old strategy to a new one. More specifically, how to progressively enhance the model from a float-based layout to Flexbox, and then CSS Grid, respectively."
  },
  {
    key: "5",
	categoryId: "1",
    title: "Flexbox Approach",
	content: "The flexible box module, known by the name of Flexbox, is a more recent layout model capable of distributing space and powerfully aligning items of a container (the box) in a one-dimensional way. Its one dimensional nature, though, does not impede you to design multidimensional layouts (rows and columns), but Flexbox may not result in reliable row stacking. esides the float approach being very popular and broadly adopted by popular grid frameworks, Flexbox presents a series of benefits over float"
  },
  {
    key: "6",
	categoryId: "2",
    title: "Progressing to CSS Grid Layout",
	content: "The CSS Grid layout follows up closely the Flexbox one, the big difference being that it works in two dimensions. That is, if you need to design a layout that deals with both rows and columns, the Grid layout will most likely suit better. It has the same aligning and space distribution factors of Flexbox, but now acting directly to the two dimensions of your container (box). In comparison to the float property, it has even more advantages: easy elements disposition, alignment, row/column/cell control, etc. Working with CSS Grid is as simple as changing the display property of your container element to grid. Inside the container, you can also create columns and rows with divs, for example. Let’s consider an example of an HTML page with four inner container divs. Regarding the CSS definitions, let’s start with the grid container div"
  },
  {
    key: "7",
	categoryId: "2",
    title: "The Benefits of Using CSS Grid for Web Form Layout",
	content: "Form layout and design is a fundamental yet frustrating part of web design and development. Ask anyone who’s ever tried to style a <select> box or align a label consistently in all browsers. In 2016, I wrote “Make Forms Fun with Flexbox”, which identified how several form difficulties could be solved with Flexbox. A key benefit was HTML source order consistency, with the <label> always following its associated field tag in a container"
  },
  {
	key: "8",
  categoryId: "1",
	title: "Advanced CSS Theming with Custom Properties and JavaScript",
  content: "Throughout this tutorial on CSS theming, we’ll be using CSS custom properties (also known as CSS variables) to implement dynamic themes for a simple HTML page. We’ll create dark and light example themes, then write JavaScript to switch between the two when the user clicks a button. Just like in typical programming languages, variables are used to hold or store values. In CSS, they’re typically used to store colors, font names, font sizes, length units, etc. They can then be referenced and reused in multiple places in the stylesheet. Most developers refer to “CSS variables”, but the official name is custom properties. CSS custom properties make it possible to modify variables that can be referenced throughout the stylesheet. Previously, this was only possible with CSS preprocessors such as Sass."
  },
  {
	key: "9",
  categoryId: "1",
	title: "How to Use Gulp.js to Automate Your CSS Tasks",
  content: "In this article, we look at how you can use Gulp.js to automate a range of repetitive CSS development tasks to speed up your workflow. Web development requires little more than a text editor. However, you’ll quickly become frustrated with repetitive tasks that are essential for a modern website and fast performance, such as: converting or transpiling, concatenating files, minifying production code, deploying updates to development, staging and live production servers. Some tasks must be repeated every time you make a change. The most infallible developer will forget to optimize an image or two and pre-production tasks become increasingly arduous. Fortunately, computers never complain about mind-numbing work. This article demonstrates how use Gulp.js to automate CSS tasks"
  },
  {
	key: "10",
  categoryId: "1",
	title: "Progressively Enhanced CSS Layouts: Floats to Flexbox & Grid",
  content: "It can be difficult to achieve complex yet flexible and responsive grid layouts. Various techniques have evolved over the years but most, such as faux columns, were hacks rather than robust design options. Most of these hacks were built on top of the CSS float property. When the Flexbox layout module was introduced to the list of display property options, a new world of options became possible. Now you can not only define the direction the container is going to stack the items but also wrap, align (items and lines), order, shrink, etc. them in a container. With all that power in their hands, developers started to create their own combinations of rules for all sorts of layouts. Flexibility reigned. However, Flexbox was designed to deal with one-dimensional layouts: either a row or a column. CSS Grid Layout, in contrast, permitted two-dimensional row and column layouts."
  },
  {
	key: "11",
  categoryId: "2",
	title: "Progressive Enhancement vs Graceful Degradation",
  content: "It’s difficult to create a website that supports every user’s browser. Two options are commonly used — “graceful degradation” and “progressive enhancement”. Graceful degradation ensures a website continues to function even when something breaks. For example, float: right may fail if an element is too big for the screen but it wraps to the next empty space so the block remains usable. Progressive enhancement takes the opposite approach. The page starts with minimum functionality and features are added when they’re supported. The example above could use a CSS media query to verify the screen is a minimum width before allowing an element to float. When it comes to grid layouts, each browser determines the appearance of its components. In this article, you’re going to understand with some real samples how to evolve some web contents from an old strategy to a new one. More specifically, how to progressively enhance the model from a float-based layout to Flexbox, and then CSS Grid, respectively."
  },
  {
	key: "12",
  categoryId: "1",
	title: "Flexbox Approach",
  content: "The flexible box module, known by the name of Flexbox, is a more recent layout model capable of distributing space and powerfully aligning items of a container (the box) in a one-dimensional way. Its one dimensional nature, though, does not impede you to design multidimensional layouts (rows and columns), but Flexbox may not result in reliable row stacking. esides the float approach being very popular and broadly adopted by popular grid frameworks, Flexbox presents a series of benefits over float"
  },
  {
	key: "13",
  categoryId: "2",
	title: "Progressing to CSS Grid Layout",
  content: "The CSS Grid layout follows up closely the Flexbox one, the big difference being that it works in two dimensions. That is, if you need to design a layout that deals with both rows and columns, the Grid layout will most likely suit better. It has the same aligning and space distribution factors of Flexbox, but now acting directly to the two dimensions of your container (box). In comparison to the float property, it has even more advantages: easy elements disposition, alignment, row/column/cell control, etc. Working with CSS Grid is as simple as changing the display property of your container element to grid. Inside the container, you can also create columns and rows with divs, for example. Let’s consider an example of an HTML page with four inner container divs. Regarding the CSS definitions, let’s start with the grid container div"
  },
  {
	key: "14",
  categoryId: "2",
	title: "The Benefits of Using CSS Grid for Web Form Layout",
  content: "Form layout and design is a fundamental yet frustrating part of web design and development. Ask anyone who’s ever tried to style a <select> box or align a label consistently in all browsers. In 2016, I wrote “Make Forms Fun with Flexbox”, which identified how several form difficulties could be solved with Flexbox. A key benefit was HTML source order consistency, with the <label> always following its associated field tag in a container"
  },
];

export default TempArticles;
