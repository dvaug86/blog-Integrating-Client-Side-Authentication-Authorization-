Integrating Client Side Authentication/Authorization
In this lab, you will be integrating all the lectures and walkthroughs of Client Side Concepts to one of your full stack labs. Blogs or Chirper, or both for the additional practice! The goal of this lab is to be able to have your lab work as it did, with the addition of Login and Register components allowing users to get tokens and successfully use your app!

 

Instructions
Install the required node modules as referenced in the Lectures and Walkthroughs

Add the appropriate code to handle Authentication/Authorization on the client, choosing where to organize them:

api-serive.ts
PrivateRoute.tsx
Add the appropriate components to handle Authentication/Authorization on the client, choosing where to organize them:

Login.tsx
Register.tsx
In your App.tsx or wherever you have your routes, change any <Route> component to <PrivateRoute> should that component only be viewable if a user is actually logged in

Swap all fetch code in your lab with apiService and confirm everything functions the exact same way

Rejoice!