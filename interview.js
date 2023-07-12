Advantgaes 
  Performence using virtual dom
  can be used on client and server 
  Readability using JSX
  Easy to test


JSX Transform :
    Auto Compile the source code without using typical compilers like babel
    can be used wihtout importing react 
    Compiled output improves bundle size

Limitation of EB
    Aysn code
    Server side rendering 

Featured of ES7 
    prototype functions
    Exponension operators :  similer for Map.pow(), ** is the sysntax

with Arrow function
      not need to binding eg. : (e) => this.handleChange(e)
      Without needs to use bind : this.handleChange(e).bind(this);

Event Pooling :
    Synthetic event object would be reused and all props would nullied after the event handler has been called 

React hooks 
    Can only be used in function comps not in class comps 
     Introduced in 16.8 version , previously functional componeve were not having the state mgmt only calls comps can do

Optimizing performence 
    useMemo: cashing CPU expensive functions 
    PureComponenet : to prevent unwanted renedering 
    State Colocation : 


Lazy LOading 
    Wheever first needed , in 16.6

Stateless vs Statefull Comps :

Synthatic Events :
    Cross browsers wrappers around the browsers native system
    combine browsers events in one single API
    make sure consitency b/w diff browsers 


Refs:
  returns the refs for comps 
eg. Managing focus, text selection etc.
    Trigeering animation 
    Integrating third party DOM

Controllerd vs UnControlled Comps:
      Controllerd : Does not maintains own state , data control by parent (Custom control), takes values throug props or context.
      UnControlled : have theie own state, data controlled by DOM , refs to use controlled comps 

Redux :
  Sinlge Source of truth , Changes made using Pure Fucntions , State is Readonly
  Acton : decribed what happened
  Reducer: determine how the state will change
  Store: object tree for entire apps
  View: displays data provided by store





  
  
      


  
