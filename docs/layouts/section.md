---
layout: layout
title: Section Layout
keywords: section, layout
search: exclude
toc: false
permalink: section-layout.html
---

<main class="tn-app__main">
    <article class="tn-page">
        <div class="tn-page__content">
            <div class="tn-has-background-color-neutral-2">
                <section class="tn-section">
                    <header class="tn-section__header">
                        <h1 class="tn-section__title">
                            .tn-section__title
                        </h1>
                        <div class="tn-section__actions">
                            .tn-section__actions
                        </div>
                    </header>
                    <div style="height: 100px;">
                        <h1>.tn-section</h1>
                        <p>Use for .tn-container, .tn-card-group and other content that requires the built-in left and right page padding.</p>
                    </div>
                    <footer class="tn-section__footer">
                        .tn-section__footer
                    </footer>
                </section>
            </div>
            <div class="tn-has-background-color-status-1">
                <section class="tn-section tn-section--full-bleed">
                    <header class="tn-section__header">
                        <h1 class="tn-section__title">
                            .tn-section__title
                        </h1>
                        <div class="tn-section__actions">
                            .tn-section__actions
                        </div>
                    </header>
                    <div style="height: 100px;">
                        <h1>.tn-section--full-bleed</h1>
                        <p>Use for .tn-table, .tn-tree and other content that must bleed to the edge.</p>
                    </div>

                    <footer class="tn-section__footer">
                        .tn-section__footer
                    </footer>
                </section>
            </div>
            <br><br>
            <br><br>
            <section class="tn-section">
                <header class="tn-section__header">
                    <h1 class="tn-section__title">

                        Vivamus sagittis <span class="tn-badge tn-badge--success">Active</span>

                    </h1>
                </header>

                <div class="tn-container">

                    <div class="tn-col--6">

                        <div class="tn-form__group">
                            <div class="tn-form__item">
                                <label class="tn-form__label" for="input-1">Field Label</label>
                                <input class="tn-form__control" type="text" id="input-1" name="" value="" placeholder="Field placeholder text">
                            </div>
                        </div>
                        <fieldset class="tn-form__group">
                            <legend class="tn-form__legend">Select an option</legend>
                            <div class="tn-form__item tn-form__item--inline tn-form__item--check">
                                <input class="tn-form__control" type="radio" id="radio-13" name="radio-name-5" value="" checked="">
                                <label class="tn-form__label" for="radio-13">Option One</label>
                            </div>
                            <div class="tn-form__item tn-form__item--inline tn-form__item--check">
                                <input class="tn-form__control" type="radio" id="radio-14" name="radio-name-5" value="">
                                <label class="tn-form__label" for="radio-14">Option Two</label>
                            </div>
                            <div class="tn-form__item tn-form__item--inline tn-form__item--check">
                                <input class="tn-form__control" type="radio" id="radio-15" name="radio-name-5" value="">
                                <label class="tn-form__label" for="radio-15">Option Three</label>
                            </div>
                        </fieldset>

                    </div>
                    <div class="tn-col--6">

                        <fieldset class="tn-form__group">
                            <div class="tn-form__item">
                                <label class="tn-form__label" for="textarea-1">Field Label</label>
                                <textarea class="tn-form__control" id="textarea-1" name="">Pellentesque metus lacus commodo eget justo ut rutrum varius nunc. Sed non rhoncus risus. Morbi sodales gravida pulvinar. Duis malesuada odio volutpat elementum vulputate massa magna scelerisque ante et accumsan tellus nunc in sem.</textarea>
                            </div>
                        </fieldset>

                    </div>
                </div>
                <footer class="tn-section__footer">
                    <em>Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet.</em>
                </footer>
            </section>
            <section class="tn-section tn-section--full-bleed">
                <header class="tn-section__header">
                    <h1 class="tn-section__title">
                        Table
                    </h1>
                    <div class="tn-section__actions">
                        <button class="tn-button tn-button--text tn-button--small">
                            <span class="tn-icon tn-icon--add" role="presentation"></span>
                            Add
                        </button>
                    </div>
                </header>
                <table class="tn-table">
                    <thead>
                        <tr>
                            <th>Header 1</th>
                            <th>Header 2</th>
                            <th>Header 3</th>
                            <th>Header 4</th>
                            <th>Header 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data 1.1</td>
                            <td>Data 1.2</td>
                            <td>Data 1.3</td>
                            <td>Data 1.4</td>
                            <td>Data 1.5</td>
                        </tr>
                        <tr>
                            <td>Data 2.1</td>
                            <td>Data 2.2</td>
                            <td>Data 2.3</td>
                            <td>Data 2.4</td>
                            <td>Data 2.5</td>
                        </tr>
                    </tbody>
                </table>
                <footer class="tn-section__footer">
                    <a href="#" class="tn-button tn-button--link">See All</a>
                </footer>
            </section>
            <hr>
            <section class="tn-section">
                <div class="tn-section__header">
                    <h1 class="tn-section__title">
                        Code
                    </h1>
                </div>
            </section></div>
        </article>
</main>
