<template>
    <!-- TODO: move this -->
    <!-- TODO: write for current project -->
    <!-- TODO: make sure current state of lesson-booking matchers descr. -->
    <section class="scrollable-wrapper">
        <div class="scrollable">
            <h2>Lesson-booking website (FRONTEND)</h2>
            <h4>STACK</h4>
            <strong class="stack">JS</strong>
            <strong class="stack">React</strong>
            <strong class="stack">Tailwind</strong>
            <strong class="stack">date-fns</strong>
            <article>
                <h2>Aims</h2>
                <p>An acquaintance of machine, a recently qualified Pilates teacher, was describing to me the
                    difficulties of
                    keeping prospective clients informed of her ever-changing availability. Organising classes took up
                    more of
                    her time than actually teaching them, mostly because of the amount of communication through various
                    involved.
                    My solution to this? Building her a website that would allow her to centralize the information, and
                    make it
                    accessible to current and future students.</p>
            </article>
            <article>
                <h2>First drafts and discussions</h2>
                <p>We spent a few hours discussing what she wanted the UI to look like, what she wanted to be able to
                    share
                    through her website, and what visitors would need to be able to do, and came up with the following
                    requirements</p>
                <ul>
                    <li>a clear, calm, professional-looking UI with minimum animations/extras</li>
                    <li>internationalization: ge, fr, en</li>
                    <li>intercative calendar, with color-coded timeslots for classes</li>
                    <li>a contact form</li>
                    <li>have the data submitted to the form sent directly to her email</li>
                </ul>
            </article>
            <article>
                <h3>Building a home page</h3>
                <p>I started by building a static homepage, including a navigation bar, and implementing routing</p>
                <div className="img-wrapper">
                    <img src="@\assets\png\preview hero_and_menu.png" />
                </div>
                <p>I then had to learn to work with date-fns in order to create a working calendar. We both agreed that
                    having a
                    preview on the home page that would link to the extend version would be useful, and that it would
                    make sense
                    to follow with a contact form, which is how I got to the following:</p>
                <div className="img-wrapper">
                    <img src="@\assets\png\preview_availability_and_contact_form.png" />
                </div>
            </article>
            <article>
                <h3>Functionality</h3>
                <p>As of now, only basic rendering and routing have been implemented. This is because my language
                    learning
                    app,as my boolean graduation project, had taken priority for the first half of March 2024.</p>
            </article>
            <article>
                <h3>Further steps</h3>
                <p>By March 31st, the form will be functional and allow for emails to be sent through EmailJS.</p>
                <p>I will then start building a backend RESTful API connected to a postegrSQL database, and this will
                    become a full-stack project. The functionalities to be implemented include:</p>
                <ul>
                    <li>
                        user login
                    </li>
                    <li>
                        admin login
                    </li>
                    <li>
                        CRUD methods for the lessons on offer
                    </li>
                    <li>
                        CRUD methods for user accounts
                    </li>
                </ul>
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