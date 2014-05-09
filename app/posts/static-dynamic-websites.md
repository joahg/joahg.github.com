#The Difference Between Static and Dynamic Websites

Today I worked on a personal programming project (alliteration unintended ;)) - I wanted to see _just how hard_ it is to build a JavaScript [REPL][1]. In short, it is really easy. You can the code behind mine at [JoahG/jsrepl][2] on GitHub. Through building (and then rebuilding) this, though, I recognized the opportunity to teach a very key difference in what makes Dynamic web frameworks _so_ much more awesome than just a simple Static website.

First, to better define what _Static_ and _Dynamic_ actually mean: a _Static_ website has all of its assets - the HTML, JavaScript, and CSS precompiled - all the code that you write will be directly translated into a web experience and put in your browser - pretty easy to understand, not a lot happening there. _Dynamic_ websites are _dynamically_ (hence the name) pieced together from the many assets that make up a single page - at no one time while making a Dynamic website does a coder have to code the _entire_ page, he simply codes all the different _parts_ of the page(s), and the server knows how to put them together appropriately.

The other thing separating Static and Dynamic websites is the fact that Dynamic websites _commonly_ are attached to a database which is able to store/serve information as needed. Databases are used to store all kinds of information: user accounts, forum posts, blog posts, pictures, etc., etc.. Static sites (with the exception of PHP, which I despise wholeheartedly) _don't_ have access to databases, and must make due without it - limiting their functionality greatly.

As an example of how these differences effect actual websites/applications, I built two different versions of my REPL, [one Static][3], and [one Dynamic][4], using Ruby on Rails. All the HTML, JS, and CSS is essentially the same, the only difference is that the Dynamic version is connected to a database, where it can store code. The Dynamic version allows you to _save_ your code, whereas the Static version requires you to save it elsewhere.

[1]:http://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop
[2]:https://github.com/JoahG/jsrepl
[3]:http://git.joahg.com/jsrepl
[4]:http://jsrepl.git.joahg.com/