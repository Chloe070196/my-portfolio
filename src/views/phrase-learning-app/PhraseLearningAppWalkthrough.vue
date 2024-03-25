<template>
    <!-- TODO: move this -->
    <!-- TODO: write for current project -->
    <!-- TODO: make sure current state of lesson-booking matchers descr. -->
    <section class="scrollable-wrapper">
        <div class="scrollable">
            <h2>ENGLISH PHRASES LEARNING APP</h2>
            <h4>STACK</h4>
            <strong class="stack">JS</strong>
            <strong class="stack">React + Vite</strong>
            <strong class="stack">NestJS</strong>
            <strong class="stack">Prisma</strong>
            <strong class="stack">PostrgeSQL</strong>
            <article>
                <h2>Aims</h2>
                <p>Having spent the past four years teaching, I've had many conversations with students on what they
                    wanted to learn. As it turns out, English idioms ended up quite high on that list, partly because
                    they're usually quite fun to explore, and partly due to how difficult it can be to grasp their
                    meaning through translation - or even to just find out what idioms do exist!</p>
                <p>So, when I got the chance to spent two weeks building my Boolean graduation project, I seized this
                    opportunity to do three things I was really excited about as a newbie Software Developer</p>
                <ul>
                    <li>Learn NestJS</li>
                    <li>Write an entire full-stack application in TypeScript</li>
                    <li>Have a go at building an app that my learners would want to use to discover and learn idiomatic
                        expressions</li>
                </ul>
            </article>
            <article>
                <h2>Initial planning</h2>
                <ul>
                    <li>User Stories</li>
                    <li>ERD</li>
                    <li>UI drafts with my trusty pen and paper</li>
                </ul>
            </article>
            <article>
                <h2>Learning TypeScript</h2>
                <p>Before starting on this project, I had spend quite a bit of time studing the TS handbook, and had
                    been developing this portfolio in TypeScript, so I felt it was time to take things to the next
                    level. I thoroughly enjoyed using TS in this project, as it helped me proactively make clear decisions regarding the datatypes my functions and components would take in as arguments before even writing them. </p>
            </article>
            <article>
                <h3>Planning phase: user stories and ERD</h3>
                <p>Having established what features I wanted as part of my MVP (minimum viable product), I moved on to figuring out what structure I would need my database to have. Since I wanted to have user get exposure to English phrases they had not encountered yet, as well as having the opportunity to review what they had learnt, and use them in writing practice (which is what usually happens in an EFL classroom), I came up with the following model, with the userphrase entity at its core: </p>
                <div class="img-wrapper">
                    <img src="\png\preview_phrase_app_erd.png" />
                </div>
            </article>
            <article>
                <h3>Building the authentication system</h3>
                <p>Having created a user entity in my PostrgeSQL database using prisma, I moved on to implementing two auth endpoints: one for registration, and one for log in requests. The process was fairly straight forward, especially thanks to prisma classes being readily available in NestJS when working with TS. I went for storing the user's JWT in localStorage (seeing as its payload solely includes the username and user id), and built an authentication context and hook to make log in a registration methods available throughout my app.</p>
                <p>I also added on-load checks to my pages so that, if a non-registered user somehow tried to access anything but the login or register page, they would immediately get re-directed to said log in page.</p>
                <div class="img-wrapper">
                    <img src="\png\preview_phrase_app_register.png"/>
                </div>
            </article>
            <article>
                <h3>Building the quiz</h3>
                <p>The first step here was to get a stepper component up and running. This was a first, and, even though there are npm packages out there that could have done the job for me, I decided to have a go at building it from scratch myself.</p>
                <p>To avoid repetition, I build three steps:</p>
                <ul>
                    <li> a quiz set up step that displays on page reload, and allows the user to set the number of phrases they would like to learn before starting the quiz</li>
                    <li>a question step that would take in any phrase object fetched from the database, and render it, alongside a select element with options for the user to chose from. This is re-used for all questions.</li>
                    <li>a very simple end-of-quiz message, with a reset button</li>
                </ul>
                <p>When the user first starts the quiz, all 6, 8, or 12 phrases are fetched from my API, and stored in state, in the stepper. I also included a currentStep state, which acts as a counter, and a canProceed state.</p>
                <p>By checking whether the currentStep number is equal or inferior to the number of phrases in the quiz, the stepper knows whether to display the question step.</p>
                <p>The canProceed state is set to true whenever the correct answer is selected, and resets after each question, meaning that the user is only able to proceed once they have figured out the answer.</p>
                <p>Last but not least, upon an question being successfully answered, a userphrase object is created for the matching phrase. This means that the user will now be able to see that phrase on their revise page. It also means that they will not see this phrase again in the quiz, as my API endpoint ensures that only phrases that a user has never seen before are fetched from the database.</p>
                <div class="img-wrapper">
                    <img src="\png\preview_phrases_app_quiz.png" />
                </div>
            </article>
            <article>
                <h3>Building a sandbox</h3>
                <p>With any skill or bit of knowledge, what truly as an impact on learning progress is practice. And while the core of this app is its quiz, I still wanted to spend at least a bit of time developing a page that would allow the user to scroll through the phrases they have learnt, and have a go and using them in writing. I implemented a filter feature, as phrases are categorised by context of use.</p>
                <p>I also included a checklist: ticking any boxes off means that the text is saved with references to the phrases used in it. I hope to come back to this project, and further expand on this feature. </p>
                <div class="img-wrapper">
                    <img src="\png\preview_phrase_app_practice_page.png" />
                </div>
            </article>
            <article>
                <h3>Future developments</h3>
                <p>I am working to deploy a demo of the application, and will be adding a link to this page as soon as it is up and running, so watch this space!</p>
                <p>The next step I will take is to create an admin (or teacher) role, with a matching backend entity, and updated registration page. I would very much like to use this as an opportunity to explore various avenue to turn this project into a community-oriented app.</p>
            </article>
        </div>
    </section>
    <div class="dark-shadow-top"></div>
</template>
<style scoped>
.img-wrapper {
    height: 450px;
    width: auto;
}

img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

article {
    padding: 12px 24px;
}

p {
    padding: 12px 0;
}

ul {
    display: grid;
    gap: 6px;
    padding-top: 12px;
}

li {
    color: white;
    font-size: 12px;
    list-style-type: disc;
}

h4 {
    position: relative;
}

.stack {
    position: relative;
    padding-right: 12px;
}
</style>