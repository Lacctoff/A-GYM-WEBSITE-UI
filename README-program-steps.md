## The key general steps in Creating a react app 8th of April 2024.

1. Open your terminal and run this command **npx create-react-app ./** and ** this command means that the react app should be created in the current directory. sometimes there might be issues hence run this commands,

# Try following steps

# Reinstall npm: open cmd as an administrator and run npm uninstall -g npm
# Go to your directory and open cmd
# Clear npm Cache using npm cache clean -f
# Now you can update npm using npm install -g npm@latest

2. you need to make sure you have **Node Js** installed on your computer before running the command in NO. 1

3. we need to install some custom packages **Note that the dependencies are located in the package.json file under dependencies** and dependencies we will use and the commands are as follows;

    React Icons **npm install react-icons**. 
    React Router **npm install react-router-dom --save**. 

4. Run **npm start** to start the development server which is similar to the Live server extension

## In the project we need to clean up some files because we wont be needing them and these files are listed below;

5. # first delete everything in the public folder since we will be needing only the index.html file
    # do the same for the SRC folder too

6. so in the public folder create an index.html file **refer to the html file in the project for reference**
7. GoTo the SRC folder, 
    # create the images folder and put in the images we will use
    # create the pages folder
    # create the UI folder for container of card components
    # create the Components folder
    # create the index.js ---- This is where we are gonna link our App to the root div in index.html
        #please check out index.js to see reference and how they are being linked together
    # install this extension--- ES7+ React/Redux/React-Native snippets

    # before installing the extension please create the App.jsx and type rafce it brings out the format of the functional component and you get something like: 
            const App = () => {
                return (
                    <div>App</div> 
                )
            }

            export default App
    # the 'App' in that div shows in the body. so basically the App.jsx is the body that shows on the webpage

8. Create the css file that house the general styles in the SRC folder and link that index.css file using import './index.css' so the styles can be applied to the App.jsx and then the root div from the index.html

9. so in the pages folder you are going to have other folders inside it with each folder containing a jsx and css file for each page. for example, pages/about/about.jsx & pages/about/about.css 
    **Refer to the pages folder to look up the different kind of folders that can be there**

10. so after creating the two files you need to link the about.css to the about.jsx using 
    # import './about.css' then your rafce function

11. Now to make sure our app works well we need to import all the components from the pages into the App.jsx
    # example:
        import Home from "./pages/home/home";
        import About from "./pages/about/about";
        import Contact from "./pages/contact/contact";
        import Gallery from "./pages/gallery/gallery";
        import NotFound from "./pages/notFound/notFound";
        import Plans from "./pages/plans/plans";
        import Trainers from "./pages/trainers/Trainers";

        const App = () => {
            return (
                <div>
                    <Home />
                    <About />
                    <Contact />
                    <Gallery />
                    <Plans />
                    <Trainers />
                    <NotFound />
                </div>
            )
        }

        export default App
    # All of the components I rendered in this div will show when i load the page so this is bascially categorizing them as normal div but i just brought them from another location.

12. There is a data.js folder that contains all data that we need.. this helps to make my work easier and      neater. refer to the data.js file in this project to know what it looks like.

13. The components folder contains components that we use which may include reusable components like NavBar, mainHeader.jsx, testimonials.jsx, FAQs.jsx and so on and so forth.

refer to this project to see how things are organized in the navBar section and the likes.

14. Note that in react instead of <a href=''></a> we use <NavLink> and thats because we can pass in props and have special style for the link...
       # example:
            import { Link, NavLink } from 'react-router-dom';
    **The <Link /> is used to encapsulate the Logo so it directs us somewhere**


 15. when using img tag for the logo we dont need to be saying ./images/blah-blah since we already used: **import Logo from "../images/logo.png";** for a navbar logo the img is wrapped inside the Link example:

    <Link to="/" className="logo">
        <img src={Logo} alt="Nav Logo" />
    </Link>

16. in our App.jsx instead of having div we need to substitute it <BrowserRouter>
    # Illustration:

    import { BrowserRouter, Routes, Route } from 'react-router-dom';

     const App = () => {
            return (
                <BrowserRouter>
                    <Navbar />
                    <Home />
                    <About />
                    <Contact />
                    <Gallery />
                    <Plans />
                    <Trainers />
                    <NotFound />
                </BrowserRouter>
            )
        }

        export default App

# check your browser and see the doings don't play!!

16. Don't forget that in the navbar you will have NavLinks and these links are an array of objects in the **data.js** file so we are just gonna map through it. Illustration given below:

    import {links} from '../data';

    <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>

# the above code documentation
# <ul className='nav__links'>: This signifies an unordered list with the class of nav__links 
# links.map(({name, path}, index)): this means i want to ilterate through the "links" array from data.js in which i will be getting the name, the path and the index of each element in the array.
# return (
    <li>
        <NavLink to={path}>{name}</NavLink>
    </li>
)           This means that after mapping through the links object i want the computer to return a list and in each list there would be a link and the name.

# CHECK OUT NO 18. FOR THE isactive? prop!!!

17. Now to code the button that shows in the mobile mode we will need to use the react icons
# Go to react icons on google
# search for bars on the search part
# you can use fa FaBars or any other

<!-- YOU CAN NOW STYLE YOUR NAVBAR FROM NAVBAR.CSS -->
<!-- YOU CAN NOW STYLE YOUR NAVBAR FROM NAVBAR.CSS -->
<!-- YOU CAN NOW STYLE YOUR NAVBAR FROM NAVBAR.CSS -->
<!-- YOU CAN NOW STYLE YOUR NAVBAR FROM NAVBAR.CSS -->


18. className={({isActive}) => isActive ? 'active-nav' : ''} : This means that the program should check if the NavLink has the isActive then the active-nav class should be activated else nothing should happen!

19. we wanna use the useState hook to change the hamburger button to the close button when we click on it. 
    # Illustartion:

    import { useState } from 'react';

    in the component do this
        const [isNavShowing, setIsNavShowing] = useState();

    also in the <ul> changes to <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>

20. add event listener to the toggle button to change the useState hook

<button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
     {
                    isNavShowing ? <FaXmark /> : <FaBars />
                }
            </button>

<!-- PLEASE NOTE THAT ANIMATION EFFECTS ARE FROM THE CSS FILES ON NAVBAR -->


<!-- with all these above we are done with setting the react app and the navbar T for thanks -->


<!-- SECTION 2 -->
SO FOR THE HOME PAGE WE WANT TO MAKE DIFFERENT SECTIONS ON THE PAGE COMPONENTS.. HMMMM

# Starting with the Header------- Notice that if you check the component folder you will see MainHeader.jsx thats an illustration.

1. Components represent major divs/sections. for example now, in html in a page let us say index.html we can have

<div>Header</div>
<div>CTA section buttons</div>
<div>Testimonials</div>
<div>FAQs</div>

so in React javascript now instead of divs i make them in components and import them to my Index.jsx/home.jsx.

2. {/* the Routes element makes sure we dynamically render components, that is where we want them to show
        @path: This is the location of the page we are heading to.
        @element: the component we want to render in that path.
      */} the routes tag in the navbar makes sure that whenever we click on the link in the navbar, the webpage takes us there.