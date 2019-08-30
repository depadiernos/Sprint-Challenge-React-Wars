# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
> React is a framework that solves the issue of how to make a dynamic site without being slow. It does it by utilizing a VirtualDOM, which is a copy of the DOM in memory. React keeps track of the current state of the DOM and applies new changes to the VirtualDOM. At an optimal time, it will sync the VirtualDOM with the real DOM. Doing this avoids multiple slow DOM manipulations, thereby optimizing performance at a pretty low cognitive (to us) overhead.

2. What does it mean to think in react?
> Thinking in React means that we code with these two major pillars in mind: Separation of concerns and declarative programming. We separate code into components, instead of separating components into HTML and JS, keeping the component (which is a single 'concern') in a single file. We also code declaratively using State instead of imperative. It is like an old car AC with a knob for 'hot/cold' and another for 'fan speed'. This is imperative. You manipulate the knobs until you 'probably' have 73 degrees. By being declarative, it allows us to say 73 degrees and that's that. 

3. Describe state.
> State describes the app's data and things that change that data. Basically, at any given point, the State is a snapshot of app -- all the data needed to be able to render the app as it is at that moment.

4. Describe props.
> Props are data that is passed from one component to another. This helps keep data flow clean, organized. One thing to note is the data flow is unidirectional -- it only goes from parent to child.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?
> Site effects are changes to your component of function that is outside the scope of that component/function. In react, you can use the dependency array argument in useEffect to tell React that the useEffect needs to sync with a particular piece of state or prop as it changes. 