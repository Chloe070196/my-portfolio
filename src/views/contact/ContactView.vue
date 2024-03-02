<template>
   <h2>CONTACT FORM</h2>
   <form ref="form" id="contact-form">
      <label>Name
         <input type="text" name="user_name">
      </label>
      <label>Email
         <input type="email" name="user_email">
      </label>
      <label>Message
         <textarea name="message"></textarea>
      </label>
      <label>Contact details
         <input type="text" name="contact_preferences">
      </label>
      <button type="submit" class="contact-link"><strong>Send</strong></button>
   </form>
</template>
<style>
form {
   position:relative;
   display: grid;
   grid-template-rows: 60px  60px 240px 40px;
   height: 480px;
   width: 400px;
}
input,
textarea {
   display:block;
   width: 400px;
   color: black;
   background-color: rgba(255, 255, 255, 0.651);
   border: 1px solid white;
   border-radius: 3px;
   padding: 4px;
   margin-top: 8px;
}
textarea {
   height: 190px;
}
button {
   position: absolute;
   right: 20px;
   bottom: 20px;
   border: 1px white solid;
}
</style>